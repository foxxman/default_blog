import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userTokenDto } from 'src/users/dto/token-user.dto';
import { User } from 'src/users/users.model';
import { Token } from './tokens.model';

@Injectable()
export class TokensService {
  constructor(private jwtService: JwtService) {}

  async generateTokens(payload: userTokenDto) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: `${process.env.JWT_ACCESS_MINUTES}m`,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: `${process.env.JWT_REFRESH_DAYS}d`,
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(user: number, refreshToken: string) {
    const token = await Token.findOne({
      where: {
        user,
      },
    });

    if (token) {
      token.refreshToken = refreshToken;
      return token.save();
    }

    const newToken = await Token.create({ refreshToken, user });
    return newToken;
  }
}

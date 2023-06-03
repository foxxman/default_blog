import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { createUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.model';
import { loginUserDto } from 'src/users/dto/login-user.dto';
import { v4 } from 'uuid';
import { TokensService } from 'src/tokens/tokens.service';
import authTokens from 'src/types/tokens';
import { userTokenDto } from 'src/users/dto/token-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private tokensService: TokensService,
  ) {}
  async registration(
    dto: createUserDto,
  ): Promise<{ user: User; tokens: authTokens }> {
    const candidateEmail = await this.usersService.getUserByEmail(dto.email);
    const candidateLogin = await this.usersService.getUserByLogin(dto.login);

    // check if login or email exists
    if (candidateEmail) {
      throw new HttpException('Email already exist', HttpStatus.BAD_REQUEST);
    }
    if (candidateLogin) {
      throw new HttpException('Login already exist', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(dto.password, 5);

    // link for email activation
    const activationLink = v4();

    // creating user
    const user = await this.usersService.createUser({
      ...dto,
      password: hashPassword,
      activationLink,
      isActivated: true,
    });

    const tokens = await this.generateTokens(user);

    await this.tokensService.saveToken(user.id, tokens.refreshToken);

    // return user and tokens
    return {
      user,
      tokens,
    };
  }

  async login(dto: loginUserDto): Promise<{ user: User; tokens: authTokens }> {
  

    const user = await this.validateUser(dto);
    const tokens = await this.generateTokens(user);

    await this.tokensService.saveToken(user.id, tokens.refreshToken);

    return {
      user,
      tokens,
    };
  }

  private async generateTokens(user: userTokenDto): Promise<authTokens> {
    const payload = {
      email: user.email,
      login: user.login,
      id: user.id,
      isActivated: user.isActivated,
      banned: user.banned,
    };

    const tokens = await this.tokensService.generateTokens(payload);

    return tokens;
  }

  private async validateUser(dto: loginUserDto): Promise<User> {

    const user = await this.usersService.getUserByLogin(dto.login);
    if (!user) throw new UnauthorizedException('Uncorrect login or password');

    const isPasswordsEqual = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordsEqual)
      throw new UnauthorizedException('Uncorrect login or password');

    return user;
  }
}

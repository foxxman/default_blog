import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async registration(dto: createUserDto) {
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

    // creating user
    const user = await this.usersService.createUser({
      ...dto,
      password: hashPassword,
    });
    // return user token
    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = { email: user.email, login: user.login, id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { createUserDto, userModelDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private UserRepository: typeof User) {}

  async getAllUsers() {
    const users = await this.UserRepository.findAll({ include: { all: true } });
    return users;
  }

  async createUser(dto: userModelDto) {
    const user = await this.UserRepository.create(dto);
    return user;
  }

  async getUserByEmail(email: string) {
    const user = this.UserRepository.findOne({
      where: { email },
      include: { all: true },
    });

    return user;
  }

  async getUserByLogin(login: string) {
    const user = this.UserRepository.findOne({
      where: { login },
      include: { all: true },
    });

    return user;
  }
}

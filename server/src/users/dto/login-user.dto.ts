import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

// объект обмена данными между подсистемами, только описание, без логики
export class loginUserDto {

  @IsNotEmpty({ message: 'Login field cant be empty' })
  @ApiProperty({ example: '_foxxman_', description: 'Unique user login' })
  readonly login: string;

  @IsNotEmpty({ message: 'Password field cant be empty' })
  @ApiProperty({ example: '12345qwerty', description: 'User password' })
  readonly password: string;
}

// props for authResponseUserData
interface model {
  email: string;
  id: number;
  isActivated: boolean;
  login: string;
  banned: boolean;
}
// data to login or registration response
export class authResponseUserData {
  email: string;
  id: number;
  isActivated: boolean;
  login: string;
  banned: boolean;

  constructor(model: model) {
    this.email = model.email;
    this.login = model.login;
    this.banned = model.banned;
    this.id = Number(model.id);
    this.isActivated = model.isActivated;
  }
}

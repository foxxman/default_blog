import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

// объект обмена данными между подсистемами, только описание, без логики
export class createUserDto {
  @IsNotEmpty({ message: 'Login field cant be empty' })
  @IsString({ message: 'Must be a string' })
  @Length(4, 15, {
    message: 'Login length must be from 4 to 15 symbols',
  })
  @ApiProperty({ example: '_foxxman_', description: 'Unique user login' })
  readonly login: string;

  @IsEmail({}, { message: 'Invalid email' })
  @ApiProperty({ example: 'user@mail.com', description: 'Unique email' })
  readonly email: string;

  @IsString({ message: 'Must be a string' }) // validation
  @Length(8, 30, {
    message: 'Password length must be from 8 to 30 symbols',
  })
  @ApiProperty({ example: '12345qwerty', description: 'User password' })
  readonly password: string;
}

export class userModelDto {
  readonly password: string;
  readonly email: string;
  readonly login: string;
  readonly activationLink: string;
  readonly isActivated: boolean;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

// объект обмена данными между подсистемами, только описание, без логики
export class createUserDto {
  @IsString()
  @Length(4, 15, {
    message: 'login length must be from 4 to 15 symbols',
  })
  @ApiProperty({ example: '_foxxman_', description: 'Unique user login' })
  readonly login: string;

  @IsString({ message: 'must be a string' }) //
  @IsEmail({}, { message: 'Invalid email' })
  @ApiProperty({ example: 'user@mail.com', description: 'Unique email' })
  readonly email: string;

  @IsString({ message: 'must be a string' }) // validation
  @Length(8, 30, {
    message: 'password length must be from 8 to 30 symbols',
  })
  @ApiProperty({ example: '12345qwerty', description: 'User password' })
  readonly password: string;
}

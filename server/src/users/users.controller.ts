import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './users.model';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Getting all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  // @ApiOperation({ summary: 'User creation' })
  // @ApiResponse({ status: 200, type: User })
  // @Post()
  // createUser(@Body() userDto: createUserDto) {
  //   return this.userService.createUser(userDto);
  // }
}

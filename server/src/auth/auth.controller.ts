import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createUserDto } from 'src/users/dto/create-user.dto';
import {
  loginUserDto,
  authResponseUserData,
} from 'src/users/dto/login-user.dto';
import { Response } from 'express';
import { userTokenDto } from 'src/users/dto/token-user.dto';
import authTokens from 'src/types/tokens';

@ApiTags('Authorization')
@Controller('auth')
@UsePipes(new ValidationPipe())
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/registration')
  async registration(@Body() dto: createUserDto, @Res() res: Response) {
    const userData = await this.authService.registration(dto);

    this.sendAuthResp(res, userData);
  }

  @Post('/login')
  async login(@Body() dto: loginUserDto, @Res() res: Response) {

    const userData = await this.authService.login(dto);
    this.sendAuthResp(res, userData);
  }

  async sendAuthResp(
    res: Response,
    userData: { user: userTokenDto; tokens: authTokens },
  ) {
    res.cookie('refreshToken', userData.tokens.refreshToken, {
      maxAge: Number(process.env.JWT_REFRESH_DAYS) * 24 * 60 * 60 * 1000, // live-time
      //unavaible for getting and editing in browser by JS
      httpOnly: true,
      // for https
      // secure: true,
    });

    res.json({
      accessToken: userData.tokens.accessToken,
      user: new authResponseUserData(userData.user),
    });
  }
}

import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { TokensModule } from 'src/tokens/tokens.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [forwardRef(() => UsersModule), TokensModule],
  exports: [AuthService],
})
export class AuthModule {}

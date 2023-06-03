import { Module } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { User } from 'src/users/users.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [TokensService],
  imports: [SequelizeModule.forFeature([User]), JwtModule],
  exports: [TokensService],
})
export class TokensModule {}

import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { Token } from './tokens.model';

@Table({ tableName: 'user_token', createdAt: false, updatedAt: false })
export class UserToken extends Model<UserToken> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @ApiProperty({ example: '1', description: 'User ID' })
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @ForeignKey(() => Token)
  @ApiProperty({ example: '1', description: "User's role ID" })
  @Column({
    type: DataType.INTEGER,
  })
  tokenId: number;
}

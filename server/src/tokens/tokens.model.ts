import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface TokenCreationAttribute {
  user: number;
  refreshToken: string;
}

@Table({ tableName: 'tokens' })
export class Token extends Model<Token, TokenCreationAttribute> {
  //   TOKEN ID

  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  //   REFRESH TOKEN
  @ApiProperty({
    example: 'somerefreshtoken',
    description: 'String - refresh token',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  refreshToken: string;

  //   USER ID
  @ApiProperty({
    example: '123',
    description: "token's user id",
  })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  user: number;
}

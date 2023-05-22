import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  Model,
  DataType,
  Column,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { Role } from './roles.model';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
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

  @ForeignKey(() => Role)
  @ApiProperty({ example: '1', description: "User's role ID" })
  @Column({
    type: DataType.INTEGER,
  })
  roleId: number;
}

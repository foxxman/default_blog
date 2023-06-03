import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  BelongsToMany,
  Column,
  DataType,
  Model,
} from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';

interface UserCreationAttribute {
  login: string;
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttribute> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '_foxxman_', description: 'Unique user login' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  login: string;

  @ApiProperty({ example: 'example@email.com', description: 'Unique email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: '123456789', description: 'User password' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: 'true', description: 'Is user banned' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({ example: 'I dont like him', description: 'Ban reason' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;

  @ApiProperty({
    example: 'true',
    description: 'Did user follow activation link from email',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isActivated: boolean;

  @ApiProperty({
    example: 'randomactivationlink',
    description: 'Part of the activation link',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  activationLink: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}

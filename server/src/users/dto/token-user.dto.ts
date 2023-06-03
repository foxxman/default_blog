import { ApiProperty } from '@nestjs/swagger';

export class userTokenDto {
  @ApiProperty({ example: '123', description: 'Unique user id' })
  readonly id: number;

  @ApiProperty({ example: '_foxxman_', description: 'Unique user login' })
  readonly login: string;

  @ApiProperty({ example: 'user@mail.com', description: 'Unique email' })
  readonly email: string;

  @ApiProperty({
    example: 'false',
    description: 'Did user activate his acount',
  })
  readonly isActivated: boolean;

  @ApiProperty({
    example: 'false',
    description: 'Was user banned for smth',
  })
  readonly banned: boolean;
}


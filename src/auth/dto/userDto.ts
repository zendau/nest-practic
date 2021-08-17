import { ApiProperty } from '@nestjs/swagger'
import { IsString, Max, Min } from 'class-validator'

export class UserData {
    @ApiProperty({example: 'user', description: 'Логин пользователя'})
    @IsString({message: "не строка"})
    @Min(0, {message: "меньше"})
    @Max(10, {message: "больше"})
    login: string
    @ApiProperty({example: 'qwerty', description: 'Пароль пользователя'})
    password: string
  }
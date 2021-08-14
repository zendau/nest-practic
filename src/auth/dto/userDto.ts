import { IsString, Max, Min } from 'class-validator'

export class UserData {
    @IsString({message: "не строка"})
    @Min(0, {message: "меньше"})
    @Max(10, {message: "больше"})
    login: string
    password: string
  }
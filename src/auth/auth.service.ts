import { UserData } from './dto/userDto'
import { UsersService } from './../users/users.service'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from "bcryptjs"
import { User } from 'src/users/user.model'

@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtSerive: JwtService)  {}

    async register(userDto: UserData) {
        const user = await this.userService.findByLogin(userDto.login)

        if (user) {
            throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST)
        }

        const hashPassword = await bcrypt.hash(userDto.password, 5)

        const createData = await this.userService.createOne({...userDto, password: hashPassword})
        return this.generateToken(createData)
    }

    async login(userDto: UserData) {
        const user = await this.userService.findByLogin(userDto.login)

        this.validateData(user)

        const userPass = await bcrypt.compare(userDto.password, user.password)

        this.validateData(userPass)

        return this.generateToken(user)
       

    }

    private validateData(data) {

        if (!data) {
            throw new HttpException('Неверный логин или пароль', HttpStatus.BAD_REQUEST)
        }
    }

    private async generateToken(user: User) {
        const payload = {login: user.login, id: user.id, password: user.password, roles: user.roles}
        console.log(payload)
        return {
            token: this.jwtSerive.sign(payload)
        }
    }

}

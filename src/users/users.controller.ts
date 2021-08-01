import { UsersService } from './users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from "./dto/create-user"

@Controller('users')
export class UsersController {
    constructor(private usersServies: UsersService) {}

    @Get()
    getAll() {
        return this.usersServies.findAll()
    }

    @Post()
    async createOneUser(@Body() createUsertDto: CreateUser) {
        return this.usersServies.createOne(createUsertDto)
    }
}

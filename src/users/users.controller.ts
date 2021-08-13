import { UsersService } from './users.service';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUser } from "./dto/create-user"
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role } from 'src/roles/role.enum';
import { Roles } from 'src/roles/roles.decorator';

@Controller('users')
export class UsersController {
    constructor(private usersServies: UsersService) {}

    //@UseGuards(JwtAuthGuard)
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersServies.findAll()
    }

    @Post()
    async createOneUser(@Body() createUsertDto: CreateUser) {
        return this.usersServies.createOne(createUsertDto)
    }
}

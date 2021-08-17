import { UsersService } from './users.service';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUser } from "./dto/create-user"
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role } from 'src/roles/role.enum';
import { Roles } from 'src/roles/roles.decorator';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';

@ApiTags('Userl module')
@Controller('users')
export class UsersController {
    constructor(private usersServies: UsersService) {}

    @ApiOperation({summary: 'Вывод всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    //@UseGuards(JwtAuthGuard)
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersServies.findAll()
    }

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User, })
    @Post()
    async createOneUser(@Body() createUsertDto: CreateUser) {
        return this.usersServies.createOne(createUsertDto)
    }
}

import { ValidationPipe } from './../pipes/validation.pipe';
import { UserData } from './dto/userDto';
import { AuthService } from './auth.service';
import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth module')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Регистрация'})
    @ApiResponse({status: 200})
    @UsePipes(ValidationPipe)
    @Post("/register")
    register(@Body() userDto: UserData) {
        return this.authService.register(userDto)
    }

    @ApiOperation({summary: 'Авторизация'})
    @ApiResponse({status: 200})
    @Post("/login")
    login(@Body() userDto: UserData) {
        return this.authService.login(userDto)
    }
}

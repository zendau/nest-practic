import { UserData } from './dto/userDto';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post("/register")
    register(@Body() userDto: UserData) {
        return this.authService.register(userDto)
    }

    @Post("/login")
    login(@Body() userDto: UserData) {
        return this.authService.login(userDto)
    }
}

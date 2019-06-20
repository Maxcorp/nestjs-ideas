import { Controller, Post, Get, Body, UsePipes, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { pipe } from 'rxjs';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Get('api/users')
    showAllUsers() {
        return this.userService.showAll();
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    login(@Body() data: UserDTO) {
        return this.userService.login(data);
    }

    @Post('register')
    @UsePipes(new ValidationPipe())
    register(@Body() data: UserDTO) {
        return this.userService.register(data);
    }
}

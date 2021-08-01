import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { User} from "./user.model"
import { UsersService } from './users.service';

@Module({
    imports: [SequelizeModule.forFeature([User])],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {}

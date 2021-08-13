import { AuthModule } from './../auth/auth.module';
import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { User} from "./user.model"
import { UsersService } from './users.service';
import { RolesModule } from 'src/roles/roles.module';

@Module({
    imports: [
        SequelizeModule.forFeature([User]),
        RolesModule,
        forwardRef(() => AuthModule),
        
    ],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService]
})
export class UsersModule {}

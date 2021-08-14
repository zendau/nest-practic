import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { CreateUser } from './dto/create-user';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        private rolesService: RolesService
    ) {}
    
    findAll(): Promise<User[]> {
        return this.userModel.findAll()
    }

    findByLogin(login) {
        return this.userModel.findOne({where: {login}, include: {all: true}})
    }

    async createOne(data: CreateUser) {
        const user = await this.userModel.create(data)
        const role = await this.rolesService.findByName("user")
        console.log(role)
        user.$set("roles", role.id)
        user.roles = [role]
        return user
    }
    
}

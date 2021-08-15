import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Roles } from './roles.model';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesUsers } from './roles-users.model';

@Injectable()
export class RolesService {

  constructor(
    @InjectModel(Roles) 
    private rolesModel : typeof Roles,
    @InjectModel(RolesUsers) 
    private rolesUsersModel : typeof RolesUsers,
    ) {}

  async create(createRoleDto: CreateRoleDto) {
    return await this.rolesModel.create(createRoleDto)
  }

  async findAll() {
    return await this.rolesModel.findAll()
  }

  async findByName(value: string) {
    return await this.rolesModel.findOne({where: {value}})
  }

  async update(updateRoleDto: UpdateRoleDto) {
    const res = await this.rolesUsersModel.update({roleId: updateRoleDto.roleId}, {where: {userId: updateRoleDto.userId}})
    return res
  }

}

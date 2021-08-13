import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Roles } from './roles.model';

@Injectable()
export class RolesService {

  constructor(@InjectModel(Roles) private rolesModel : typeof Roles) {}

  async create(createRoleDto: CreateRoleDto) {
    return await this.rolesModel.create(createRoleDto)
  }

  async findAll() {
    return await this.rolesModel.findAll()
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  async findByName(value: string) {
    return await this.rolesModel.findOne({where: {value}})
  }


  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}

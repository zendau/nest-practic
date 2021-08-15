import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';


@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }


  @Patch('update')
  update(@Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(updateRoleDto);
  }


}

import { RolesUsers } from 'src/roles/roles-users.model';
import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from './roles.model';

@ApiTags('Roles module')
@Controller('roles') 
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation({summary: 'Создание роли'})
  @ApiResponse({status: 200, type: Roles})
  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @ApiOperation({summary: 'Вывод всех ролей'})
  @ApiResponse({status: 200, type: [Roles]})
  @Get()
  findAll() {
    return this.rolesService.findAll();
  }


  @ApiOperation({summary: 'обновление роли у пользователя'})
  @ApiResponse({status: 200, type: RolesUsers})
  @Patch('update')
  update(@Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(updateRoleDto);
  }


}

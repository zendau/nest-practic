import { RolesUsers } from 'src/roles/roles-users.model';
import { Controller, Get, Post, Body, Patch, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from './roles.guard';

@ApiTags('Roles module')
@Controller('roles') 
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation({summary: 'Создание роли'})
  @ApiResponse({status: 200, type: Roles})
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @ApiOperation({summary: 'Вывод всех ролей'})
  @ApiResponse({status: 200, type: [Roles]})
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.rolesService.findAll();
  }


  @ApiOperation({summary: 'обновление роли у пользователя'})
  @ApiResponse({status: 200, type: RolesUsers})
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @Patch('update')
  update(@Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(updateRoleDto);
  }


}

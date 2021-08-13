import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Roles } from './roles.model';
import { RolesUsers } from './roles-users.model';


@Module({
  imports: [
    SequelizeModule.forFeature([Roles, RolesUsers]),
  ],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService]
})
export class RolesModule {}

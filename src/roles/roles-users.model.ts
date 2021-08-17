import { ApiProperty } from '@nestjs/swagger'
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript'
import { User } from 'src/users/user.model'
import { Roles } from './roles.model'

@Table({createdAt: false, updatedAt: false})
export class RolesUsers extends Model {
    @ApiProperty({example: '1', description: 'Индефикатор пользователя'})
    @ForeignKey(() => Roles)
    @Column
    roleId: number

    @ApiProperty({example: '1', description: 'Индефикатор роли'})
    @ForeignKey(() => User)
    @Column
    userId: number
}

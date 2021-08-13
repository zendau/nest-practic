import { Column, ForeignKey, Model, Table } from 'sequelize-typescript'
import { User } from 'src/users/user.model'
import { Roles } from './roles.model'

@Table({createdAt: false, updatedAt: false})
export class RolesUsers extends Model {
    @ForeignKey(() => Roles)
    @Column
    roleId: number
  
    @ForeignKey(() => User)
    @Column
    userId: number
}

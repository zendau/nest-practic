import { Roles } from '../roles/roles.model'

import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { RolesUsers } from 'src/roles/roles-users.model'


@Table({createdAt: false, updatedAt: false})
export class User extends Model {
  @Column({autoIncrement: true, primaryKey: true, type: DataType.INTEGER})
  id: number

  @Column({unique: true, allowNull: false})
  login: string;

  @Column({ allowNull: false })
  password: string

  @BelongsToMany(() => Roles, () => RolesUsers)
  roles: Roles[]
}

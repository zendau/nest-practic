
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { User } from 'src/users/user.model'
import { RolesUsers } from './roles-users.model'

@Table({createdAt: false, updatedAt: false}) 
export class Roles extends Model {
  @Column({autoIncrement: true, primaryKey: true, type: DataType.INTEGER})
  id: number

  @Column({unique: true, allowNull: false})
  value: string

  @Column({ allowNull: false })
  desk: string

  @BelongsToMany(() => User, () => RolesUsers)
  users: User[]
}

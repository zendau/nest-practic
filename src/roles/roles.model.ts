
import { ApiProperty } from '@nestjs/swagger'
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { User } from 'src/users/user.model'
import { RolesUsers } from './roles-users.model'

@Table({createdAt: false, updatedAt: false}) 
export class Roles extends Model {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({autoIncrement: true, primaryKey: true, type: DataType.INTEGER})
  id: number

  @ApiProperty({example: 'admin', description: 'Значение'})
  @Column({unique: true, allowNull: false})
  value: string

  @ApiProperty({example: 'Администратор сайта', description: 'Администратор сайта'})
  @Column({ allowNull: false })
  desk: string

  @ApiProperty({example: 'user', description: 'пользователь у которого данная роль'})
  @BelongsToMany(() => User, () => RolesUsers)
  users: User[]
}

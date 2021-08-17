import { Roles } from '../roles/roles.model'

import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { RolesUsers } from 'src/roles/roles-users.model'
import { Post } from 'src/posts/posts.model'
import { ApiProperty } from '@nestjs/swagger'


@Table({createdAt: false, updatedAt: false})
export class User extends Model {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({autoIncrement: true, primaryKey: true, type: DataType.INTEGER})
  id: number

  @ApiProperty({example: 'user', description: 'Логин пользователя'})
  @Column({unique: true, allowNull: false})
  login: string;

  @ApiProperty({example: 'qwerty', description: 'Пароль пользователя'})
  @Column({ allowNull: false })
  password: string

  @ApiProperty({example: 'admin', description: 'Роли пользователя'})
  @BelongsToMany(() => Roles, () => RolesUsers)
  roles: Roles[]

  @ApiProperty({example: 'posts', description: 'Посты пользователя'})
  @HasMany(() => Post)
  posts: Post[]
}

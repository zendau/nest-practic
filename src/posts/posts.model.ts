import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { User } from 'src/users/user.model';


@Table({createdAt: false, updatedAt: false})
export class Post extends Model {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({autoIncrement: true, primaryKey: true, type: DataType.INTEGER})
  id: number
 
  @ApiProperty({example: 'first post', description: 'Название поста'})
  @Column({allowNull: false})
  title: string;

  @ApiProperty({example: 'body of post', description: 'Содержимое поста'})
  @Column({ allowNull: false })
  body: string

  @ApiProperty({example: 'image.png', description: 'Изображение поста'})
  @Column({ allowNull: false })
  image: string

  @ApiProperty({example: '1', description: 'Уникальный идентификатор автора поста'})
  @ForeignKey(() => User)
  @Column
  userId: number

  @ApiProperty({example: 'admin', description: 'Автор поста'})
  @BelongsTo(() => User)
  user: User
}

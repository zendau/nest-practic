import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { User } from 'src/users/user.model';


@Table({createdAt: false, updatedAt: false})
export class Post extends Model {
  @Column({autoIncrement: true, primaryKey: true, type: DataType.INTEGER})
  id: number

  @Column({allowNull: false})
  title: string;

  @Column({ allowNull: false })
  body: string

  @Column({ allowNull: false })
  image: string

  @ForeignKey(() => User)
  @Column
  userId: number

  @BelongsTo(() => User)
  user: User
}

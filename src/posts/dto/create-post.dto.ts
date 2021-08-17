import { ApiProperty } from "@nestjs/swagger"

export class CreatePostDto {
    @ApiProperty({example: 'first post', description: 'Название поста'})
    title: string 
    @ApiProperty({example: 'body of post', description: 'Содержимое поста'})
    body: string
    @ApiProperty({example: '1', description: 'Уникальный идентификатор автора поста'})
    userId: number
}

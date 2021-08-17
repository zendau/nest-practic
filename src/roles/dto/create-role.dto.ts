import { ApiProperty } from '@nestjs/swagger'
export class CreateRoleDto {
    @ApiProperty({example: 'admin', description: 'Значение'})
    value: string
    @ApiProperty({example: 'Администратор сайта', description: 'Администратор сайта'})
    desk: string
}

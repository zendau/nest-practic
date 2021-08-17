import { ApiProperty } from '@nestjs/swagger'

export class UpdateRoleDto {
    @ApiProperty({example: '1', description: 'Индефикатор пользователя'})
    userId: number
    @ApiProperty({example: '1', description: 'Индефикатор роли'})
    roleId: number
}

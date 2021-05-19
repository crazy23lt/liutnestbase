import { ApiProperty } from '@nestjs/swagger';
export class CreateDogDto {
  @ApiProperty({
    description: '狗名称',
    default: '小白',
  })
  readonly name: string;
  @ApiProperty({
    description: '狗年龄',
    default: 12,
  })
  readonly age: number;
  @ApiProperty({
    description: '狗品种',
    default: '变异',
  })
  readonly breed: string;
}

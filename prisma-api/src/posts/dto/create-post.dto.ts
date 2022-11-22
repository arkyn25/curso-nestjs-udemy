import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'Titulo do post' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Conteudo do post' })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({ description: 'Autor do post' })
  @IsEmail()
  authorEmail: string;
}

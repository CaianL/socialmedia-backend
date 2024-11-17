import { IsNotEmpty, IsOptional, IsString, MaxLength, IsInt } from 'class-validator';

export class ComentarioDTO {
  @IsNotEmpty()
  @IsString()
  texto: string;

  @IsInt()
  postagemId: number;

  @IsInt()
  usuarioId: number;
}
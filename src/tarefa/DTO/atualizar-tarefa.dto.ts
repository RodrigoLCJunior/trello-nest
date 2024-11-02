import { IsString, IsOptional } from 'class-validator';

export class AtualizarTarefaDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  descricao?: string;
}

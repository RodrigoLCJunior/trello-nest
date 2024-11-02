import { IsString, IsOptional } from 'class-validator';

export class AtualizarCartaoDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  descricao?: string;
}

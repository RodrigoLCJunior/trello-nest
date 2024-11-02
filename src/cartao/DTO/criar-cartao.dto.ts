import { IsString, IsOptional, IsEnum, IsNotEmpty } from 'class-validator';

export class CriarCartaoDto {
  @IsString()
  titulo: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsNotEmpty()
  tarefaId: number; // Certifique-se de que o ID da tarefa seja obrigatório

  @IsEnum(['A Fazer', 'Em Progresso', 'Concluído'])
  status: 'A Fazer' | 'Em Progresso' | 'Concluído';
}

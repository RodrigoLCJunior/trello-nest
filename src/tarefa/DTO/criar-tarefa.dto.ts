import { IsNotEmpty, IsString, IsEnum, IsOptional, IsDate } from 'class-validator';
import { StatusTarefa, PrioridadeTarefa } from '../tarefa.entity';

export class CriarTarefaDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsOptional() // Descrição não é obrigatória
  @IsString()
  descricao?: string;

  @IsEnum(StatusTarefa)
  status: StatusTarefa;

  @IsEnum(PrioridadeTarefa)
  prioridade: PrioridadeTarefa;

  @IsOptional()
  @IsDate()
  dataLimite?: Date; // Data limite opcional
}

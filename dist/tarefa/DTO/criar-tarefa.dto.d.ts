import { StatusTarefa, PrioridadeTarefa } from '../tarefa.entity';
export declare class CriarTarefaDto {
    titulo: string;
    descricao?: string;
    status: StatusTarefa;
    prioridade: PrioridadeTarefa;
    dataLimite?: Date;
}

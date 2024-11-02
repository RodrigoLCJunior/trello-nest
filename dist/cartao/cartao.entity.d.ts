import { Tarefa } from '../tarefa/tarefa.entity';
export declare class Cartao {
    id: number;
    titulo: string;
    descricao: string;
    status: 'A Fazer' | 'Em Progresso' | 'Concluído';
    tarefa: Tarefa;
}

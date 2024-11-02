import { Cartao } from '../cartao/cartao.entity';
export declare enum StatusTarefa {
    A_FAZER = "A Fazer",
    EM_PROGESSO = "Em Progresso",
    CONCLUIDO = "Conclu\u00EDdo"
}
export declare enum PrioridadeTarefa {
    BAIXA = "Baixa",
    MEDIA = "M\u00E9dia",
    ALTA = "Alta"
}
export declare class Tarefa {
    id: number;
    titulo: string;
    descricao: string;
    dataCriacao: Date;
    status: StatusTarefa;
    prioridade: PrioridadeTarefa;
    dataLimite: Date;
    cartoes: Cartao[];
}

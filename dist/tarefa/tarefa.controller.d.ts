import { TarefaService } from './tarefa.service';
import { CriarTarefaDto } from './dto/criar-tarefa.dto';
import { AtualizarTarefaDto } from './dto/atualizar-tarefa.dto';
import { Tarefa } from './tarefa.entity';
export declare class TarefaController {
    private readonly tarefaService;
    constructor(tarefaService: TarefaService);
    create(criarTarefaDto: CriarTarefaDto): Promise<Tarefa>;
    findAll(): Promise<Tarefa[]>;
    findOne(id: string): Promise<Tarefa>;
    update(id: string, atualizarTarefaDto: AtualizarTarefaDto): Promise<Tarefa>;
    remove(id: string): Promise<void>;
}

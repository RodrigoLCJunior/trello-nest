import { CartaoService } from './cartao.service';
import { CriarCartaoDto } from './DTO/criar-cartao.dto';
import { AtualizarCartaoDto } from './DTO/atualizar-cartao.dto';
import { Cartao } from './cartao.entity';
export declare class CartaoController {
    private readonly cartaoService;
    constructor(cartaoService: CartaoService);
    create(criarCartaoDto: CriarCartaoDto): Promise<Cartao>;
    findAll(): Promise<Cartao[]>;
    findOne(id: number): Promise<Cartao>;
    update(id: number, atualizarCartaoDto: AtualizarCartaoDto): Promise<Cartao>;
    atualizarStatus(id: number, status: 'A Fazer' | 'Em Progresso' | 'Concluído'): Promise<Cartao>;
    remove(id: number): Promise<void>;
}

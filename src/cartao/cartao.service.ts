import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cartao } from './cartao.entity';
import { CriarCartaoDto } from './DTO/criar-cartao.dto';
import { AtualizarCartaoDto } from './DTO/atualizar-cartao.dto';
import { Tarefa } from '../tarefa/tarefa.entity';

@Injectable()
export class CartaoService {
  constructor(
    @InjectRepository(Cartao)
    private cartaoRepository: Repository<Cartao>,
    @InjectRepository(Tarefa)
    private tarefaRepository: Repository<Tarefa>,
  ) {}

  async create(criarCartaoDto: CriarCartaoDto): Promise<Cartao> {
    const tarefa = await this.tarefaRepository.findOne({
      where: { id: criarCartaoDto.tarefaId }, // Busca pela tarefa usando o ID corretamente
    });

    if (!tarefa) {
      throw new Error('Tarefa não encontrada'); // Trate o erro se a tarefa não existir
    }

    const cartao = this.cartaoRepository.create(criarCartaoDto);
    cartao.tarefa = tarefa; // Vincule a tarefa ao cartão
    return this.cartaoRepository.save(cartao);
  }

  findAll(): Promise<Cartao[]> {
    return this.cartaoRepository.find({ relations: ['tarefa'] });
  }

  findOne(id: number): Promise<Cartao> {
    return this.cartaoRepository.findOne({
      where: { id },
      relations: ['tarefa'], // Para incluir a tarefa na busca
    });
  }

  async update(id: number, atualizarCartaoDto: AtualizarCartaoDto): Promise<Cartao> {
    await this.cartaoRepository.update(id, atualizarCartaoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.cartaoRepository.delete(id);
  }

  async atualizarStatus(id: number, status: 'A Fazer' | 'Em Progresso' | 'Concluído'): Promise<Cartao> {
    await this.cartaoRepository.update(id, { status });
    return this.findOne(id);
  }
  
}

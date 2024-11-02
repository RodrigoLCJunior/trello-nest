import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarefa } from './tarefa.entity';
import { CriarTarefaDto } from './DTO/criar-tarefa.dto';
import { AtualizarTarefaDto } from './DTO/atualizar-tarefa.dto';

@Injectable()
export class TarefaService {
  constructor(
    @InjectRepository(Tarefa)
    private tarefaRepository: Repository<Tarefa>,
  ) {}

  async create(criarTarefaDto: CriarTarefaDto): Promise<Tarefa> {
    const tarefa = this.tarefaRepository.create({
      ...criarTarefaDto,
      dataCriacao: new Date(), // Gera a data de criação automaticamente
    });
    return this.tarefaRepository.save(tarefa);
  }

  findAll(): Promise<Tarefa[]> {
    return this.tarefaRepository.find({ relations: ['cartoes'] });
  }

  findOne(id: number): Promise<Tarefa> {
    return this.tarefaRepository.findOne({
      where: { id },
      relations: ['cartoes'],
    });
  }

  async update(id: number, atualizarTarefaDto: AtualizarTarefaDto): Promise<Tarefa> {
    await this.tarefaRepository.update(id, atualizarTarefaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tarefaRepository.delete(id);
  }
}

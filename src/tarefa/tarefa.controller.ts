import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { CriarTarefaDto } from './dto/criar-tarefa.dto';
import { AtualizarTarefaDto } from './dto/atualizar-tarefa.dto';
import { Tarefa } from './tarefa.entity';

@Controller('tarefas')
export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) {}

  @Post()
  create(@Body() criarTarefaDto: CriarTarefaDto): Promise<Tarefa> {
    return this.tarefaService.create(criarTarefaDto);
  }

  @Get()
  findAll(): Promise<Tarefa[]> {
    return this.tarefaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Tarefa> {
    return this.tarefaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() atualizarTarefaDto: AtualizarTarefaDto): Promise<Tarefa> {
    return this.tarefaService.update(+id, atualizarTarefaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.tarefaService.remove(+id);
  }
}

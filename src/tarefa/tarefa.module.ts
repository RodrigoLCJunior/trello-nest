import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarefa } from './tarefa.entity';
import { TarefaService } from './tarefa.service';
import { TarefaController } from './tarefa.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tarefa])],
  providers: [TarefaService],
  controllers: [TarefaController],
})
export class TarefaModule {}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Tarefa } from '../tarefa/tarefa.entity';

@Entity()
export class Cartao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  descricao: string;

  @Column({ default: 'A Fazer' }) // status padrão
  status: 'A Fazer' | 'Em Progresso' | 'Concluído'; // define os status possíveis

  @ManyToOne(() => Tarefa, tarefa => tarefa.cartoes)
  tarefa: Tarefa;
}

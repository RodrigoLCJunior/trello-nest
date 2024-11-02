import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories/category.entity';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';
import { TarefaModule } from './tarefa/tarefa.module';
import { CartaoModule } from './cartao/cartao.module';
import { Tarefa } from './tarefa/tarefa.entity';
import { Cartao } from './cartao/cartao.entity';
import { CartaoController } from './cartao/cartao.controller';
import { CartaoService } from './cartao/cartao.service';
import { TarefaController } from './tarefa/tarefa.controller';
import { TarefaService } from './tarefa/tarefa.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "unicesumar",
      password: "unicesumar",
      database: "blog",
      entities: [Category, User, Tarefa, Cartao],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Cartao, Tarefa]),
    CategoriesModule,
    UsersModule,
    TarefaModule,
    CartaoModule
  ],
  controllers: [AppController, CartaoController, TarefaController],
  providers: [AppService, CartaoService, TarefaService]
})
export class AppModule { }

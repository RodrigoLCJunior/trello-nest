import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CartaoService } from './cartao.service';
import { CriarCartaoDto } from './DTO/criar-cartao.dto';
import { AtualizarCartaoDto } from './DTO/atualizar-cartao.dto';
import { Cartao } from './cartao.entity';

@Controller('cartoes')
export class CartaoController {
  constructor(private readonly cartaoService: CartaoService) {}

  @Post()
  create(@Body() criarCartaoDto: CriarCartaoDto): Promise<Cartao> {
    return this.cartaoService.create(criarCartaoDto);
  }

  @Get()
  findAll(): Promise<Cartao[]> {
    return this.cartaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Cartao> {
    return this.cartaoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() atualizarCartaoDto: AtualizarCartaoDto): Promise<Cartao> {
    return this.cartaoService.update(id, atualizarCartaoDto);
  }

  @Patch(':id/status')
  async atualizarStatus(@Param('id') id: number, @Body('status') status: 'A Fazer' | 'Em Progresso' | 'Concluído'): Promise<Cartao> {
    return this.cartaoService.atualizarStatus(id, status);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.cartaoService.remove(id);
  }
}

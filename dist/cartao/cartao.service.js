"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartaoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cartao_entity_1 = require("./cartao.entity");
const tarefa_entity_1 = require("../tarefa/tarefa.entity");
let CartaoService = class CartaoService {
    constructor(cartaoRepository, tarefaRepository) {
        this.cartaoRepository = cartaoRepository;
        this.tarefaRepository = tarefaRepository;
    }
    async create(criarCartaoDto) {
        const tarefa = await this.tarefaRepository.findOne({
            where: { id: criarCartaoDto.tarefaId },
        });
        if (!tarefa) {
            throw new Error('Tarefa não encontrada');
        }
        const cartao = this.cartaoRepository.create(criarCartaoDto);
        cartao.tarefa = tarefa;
        return this.cartaoRepository.save(cartao);
    }
    findAll() {
        return this.cartaoRepository.find({ relations: ['tarefa'] });
    }
    findOne(id) {
        return this.cartaoRepository.findOne({
            where: { id },
            relations: ['tarefa'],
        });
    }
    async update(id, atualizarCartaoDto) {
        await this.cartaoRepository.update(id, atualizarCartaoDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.cartaoRepository.delete(id);
    }
    async atualizarStatus(id, status) {
        await this.cartaoRepository.update(id, { status });
        return this.findOne(id);
    }
};
exports.CartaoService = CartaoService;
exports.CartaoService = CartaoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cartao_entity_1.Cartao)),
    __param(1, (0, typeorm_1.InjectRepository)(tarefa_entity_1.Tarefa)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CartaoService);
//# sourceMappingURL=cartao.service.js.map
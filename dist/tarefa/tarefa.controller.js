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
exports.TarefaController = void 0;
const common_1 = require("@nestjs/common");
const tarefa_service_1 = require("./tarefa.service");
const criar_tarefa_dto_1 = require("./dto/criar-tarefa.dto");
const atualizar_tarefa_dto_1 = require("./dto/atualizar-tarefa.dto");
let TarefaController = class TarefaController {
    constructor(tarefaService) {
        this.tarefaService = tarefaService;
    }
    create(criarTarefaDto) {
        return this.tarefaService.create(criarTarefaDto);
    }
    findAll() {
        return this.tarefaService.findAll();
    }
    findOne(id) {
        return this.tarefaService.findOne(+id);
    }
    update(id, atualizarTarefaDto) {
        return this.tarefaService.update(+id, atualizarTarefaDto);
    }
    remove(id) {
        return this.tarefaService.remove(+id);
    }
};
exports.TarefaController = TarefaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_tarefa_dto_1.CriarTarefaDto]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualizar_tarefa_dto_1.AtualizarTarefaDto]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "remove", null);
exports.TarefaController = TarefaController = __decorate([
    (0, common_1.Controller)('tarefas'),
    __metadata("design:paramtypes", [tarefa_service_1.TarefaService])
], TarefaController);
//# sourceMappingURL=tarefa.controller.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriarTarefaDto = void 0;
const class_validator_1 = require("class-validator");
const tarefa_entity_1 = require("../tarefa.entity");
class CriarTarefaDto {
}
exports.CriarTarefaDto = CriarTarefaDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CriarTarefaDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CriarTarefaDto.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(tarefa_entity_1.StatusTarefa),
    __metadata("design:type", String)
], CriarTarefaDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(tarefa_entity_1.PrioridadeTarefa),
    __metadata("design:type", String)
], CriarTarefaDto.prototype, "prioridade", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CriarTarefaDto.prototype, "dataLimite", void 0);
//# sourceMappingURL=criar-tarefa.dto.js.map
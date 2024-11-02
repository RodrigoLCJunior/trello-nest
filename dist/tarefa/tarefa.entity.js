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
exports.Tarefa = exports.PrioridadeTarefa = exports.StatusTarefa = void 0;
const typeorm_1 = require("typeorm");
const cartao_entity_1 = require("../cartao/cartao.entity");
var StatusTarefa;
(function (StatusTarefa) {
    StatusTarefa["A_FAZER"] = "A Fazer";
    StatusTarefa["EM_PROGESSO"] = "Em Progresso";
    StatusTarefa["CONCLUIDO"] = "Conclu\u00EDdo";
})(StatusTarefa || (exports.StatusTarefa = StatusTarefa = {}));
var PrioridadeTarefa;
(function (PrioridadeTarefa) {
    PrioridadeTarefa["BAIXA"] = "Baixa";
    PrioridadeTarefa["MEDIA"] = "M\u00E9dia";
    PrioridadeTarefa["ALTA"] = "Alta";
})(PrioridadeTarefa || (exports.PrioridadeTarefa = PrioridadeTarefa = {}));
let Tarefa = class Tarefa {
};
exports.Tarefa = Tarefa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tarefa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tarefa.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tarefa.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Tarefa.prototype, "dataCriacao", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: StatusTarefa,
        default: StatusTarefa.A_FAZER,
    }),
    __metadata("design:type", String)
], Tarefa.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: PrioridadeTarefa,
        default: PrioridadeTarefa.MEDIA,
    }),
    __metadata("design:type", String)
], Tarefa.prototype, "prioridade", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Tarefa.prototype, "dataLimite", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cartao_entity_1.Cartao, cartao => cartao.tarefa),
    __metadata("design:type", Array)
], Tarefa.prototype, "cartoes", void 0);
exports.Tarefa = Tarefa = __decorate([
    (0, typeorm_1.Entity)()
], Tarefa);
//# sourceMappingURL=tarefa.entity.js.map
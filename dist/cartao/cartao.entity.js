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
exports.Cartao = void 0;
const typeorm_1 = require("typeorm");
const tarefa_entity_1 = require("../tarefa/tarefa.entity");
let Cartao = class Cartao {
};
exports.Cartao = Cartao;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cartao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cartao.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Cartao.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'A Fazer' }),
    __metadata("design:type", String)
], Cartao.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tarefa_entity_1.Tarefa, tarefa => tarefa.cartoes),
    __metadata("design:type", tarefa_entity_1.Tarefa)
], Cartao.prototype, "tarefa", void 0);
exports.Cartao = Cartao = __decorate([
    (0, typeorm_1.Entity)()
], Cartao);
//# sourceMappingURL=cartao.entity.js.map
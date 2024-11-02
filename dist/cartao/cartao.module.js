"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartaoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cartao_entity_1 = require("./cartao.entity");
const cartao_service_1 = require("./cartao.service");
const cartao_controller_1 = require("./cartao.controller");
const tarefa_entity_1 = require("../tarefa/tarefa.entity");
let CartaoModule = class CartaoModule {
};
exports.CartaoModule = CartaoModule;
exports.CartaoModule = CartaoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cartao_entity_1.Cartao, tarefa_entity_1.Tarefa])],
        providers: [cartao_service_1.CartaoService],
        controllers: [cartao_controller_1.CartaoController],
    })
], CartaoModule);
//# sourceMappingURL=cartao.module.js.map
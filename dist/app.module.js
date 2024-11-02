"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("./categories/category.entity");
const categories_module_1 = require("./categories/categories.module");
const users_module_1 = require("./users/users.module");
const users_entity_1 = require("./users/users.entity");
const tarefa_module_1 = require("./tarefa/tarefa.module");
const cartao_module_1 = require("./cartao/cartao.module");
const tarefa_entity_1 = require("./tarefa/tarefa.entity");
const cartao_entity_1 = require("./cartao/cartao.entity");
const cartao_controller_1 = require("./cartao/cartao.controller");
const cartao_service_1 = require("./cartao/cartao.service");
const tarefa_controller_1 = require("./tarefa/tarefa.controller");
const tarefa_service_1 = require("./tarefa/tarefa.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "unicesumar",
                password: "unicesumar",
                database: "blog",
                entities: [category_entity_1.Category, users_entity_1.User, tarefa_entity_1.Tarefa, cartao_entity_1.Cartao],
                synchronize: true
            }),
            typeorm_1.TypeOrmModule.forFeature([cartao_entity_1.Cartao, tarefa_entity_1.Tarefa]),
            categories_module_1.CategoriesModule,
            users_module_1.UsersModule,
            tarefa_module_1.TarefaModule,
            cartao_module_1.CartaoModule
        ],
        controllers: [app_controller_1.AppController, cartao_controller_1.CartaoController, tarefa_controller_1.TarefaController],
        providers: [app_service_1.AppService, cartao_service_1.CartaoService, tarefa_service_1.TarefaService]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
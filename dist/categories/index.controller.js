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
exports.IndexController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
const typeorm_2 = require("@nestjs/typeorm");
const categories_dto_1 = require("./DTO/categories.dto");
let IndexController = class IndexController {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    index() {
        return this.categoryRepository.find();
    }
    find(id) {
        return this.categoryRepository.findOneBy({ id });
    }
    create(categoryDto) {
        const category = this.categoryRepository.create(categoryDto);
        return this.categoryRepository.save(category);
    }
    async update(id, categoryDTO) {
        const category = await this.categoryRepository.findOneBy({ id });
        if (category === null) {
            throw new common_1.NotFoundException(`Categoria com id '${id}' não encontrada`);
        }
        category.name = categoryDTO.name;
        category.description = categoryDTO.description;
        category.isActive = categoryDTO.isActive;
        return this.categoryRepository.save(category);
    }
    async delete(id) {
        await this.categoryRepository.delete(id);
    }
};
exports.IndexController = IndexController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IndexController.prototype, "index", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IndexController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categories_dto_1.CategoryDTO]),
    __metadata("design:returntype", void 0)
], IndexController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, categories_dto_1.CategoryDTO]),
    __metadata("design:returntype", Promise)
], IndexController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IndexController.prototype, "delete", null);
exports.IndexController = IndexController = __decorate([
    (0, common_1.Controller)("categories"),
    __param(0, (0, typeorm_2.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], IndexController);
//# sourceMappingURL=index.controller.js.map
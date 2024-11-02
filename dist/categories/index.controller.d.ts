import { Repository } from "typeorm";
import { Category } from "./category.entity";
import { CategoryDTO } from "./DTO/categories.dto";
export declare class IndexController {
    private categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    index(): Promise<Category[]>;
    find(id: number): Promise<Category>;
    create(categoryDto: CategoryDTO): Promise<Category>;
    update(id: number, categoryDTO: CategoryDTO): Promise<Category>;
    delete(id: number): Promise<void>;
}

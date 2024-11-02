import { Repository } from "typeorm";
import { User } from "./users.entity";
import { UserDTO } from "./DTO/users.dto";
export declare class UsersController {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getUsersList(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    createUser(userDto: UserDTO): User;
    deleteUserById(id: number): Promise<void>;
}

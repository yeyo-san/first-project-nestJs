import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersServices;
    constructor(usersServices: UsersService);
    create(createUser: CreateUserDto): Promise<import("./entities/user.entitty").User>;
    findAll(): Promise<import("./entities/user.entitty").User[]>;
    findOne(id: string): Promise<import("./entities/user.entitty").User>;
    update(id: string, updateUser: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

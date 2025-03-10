import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entitty';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
    private userRepository: Repository<User>
){}

    async create(createUserDto: CreateUserDto){
        const newUser = this.userRepository.create(createUserDto)
        return await this.userRepository.save(newUser)
    }

    async findAll(){
        return await this.userRepository.find()
    }

    async findOne(id: number){
        return await this.userRepository.findOne({ where: {id} });
    }

    async update(id: number, updateUserDto: UpdateUserDto){
        return await this.userRepository.update(id, updateUserDto)
    }

    async remove(id: number){
        return await this.userRepository.delete(id)
    }

    async findByEmail( email: string ){
        return await this.userRepository.findOne({ where: {email} })
    }
}

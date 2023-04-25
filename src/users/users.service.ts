import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { Model } from 'mongoose';
import { Users } from './entities/users.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {

    constructor(
        @Inject('USERS_MODEL')
        private userModel: Model<Users>,
      ) {}

    async findAll(): Promise<Users[]> {
    return Promise.resolve(this.userModel.find());
  }

  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async create(createUsersDto: CreateUsersDto): Promise<Users> {
    const newUser = new this.userModel(createUsersDto)
    return newUser.save();
   
  }

  async findById(id: string): Promise<Users> {
    return this.userModel.findById(id).exec();
  }

  async findByUsername(name: string): Promise<Users> {
    return this.userModel.findOne({username : name}).exec();
  }

  async update(id: string, updateUsersDto: UpdateUsersDto): Promise<Users> {
    return  this.userModel.findByIdAndUpdate(id, updateUsersDto).exec();
  }

  async remove(id: string):  Promise<Users> {
    return this.userModel.findByIdAndDelete(id).exec();
}
}

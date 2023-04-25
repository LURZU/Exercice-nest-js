import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAssociationDto } from './dto/create-association.dto';
import { UpdateAssociationDto } from './dto/update-association.dto';
import { Model } from 'mongoose';
import { Association } from './entities/association.entity';


@Injectable()
export class AssociationService {

    constructor(
        @Inject('ASSOCIATION_MODEL')
        private userModel: Model<Association>,
      ) {}

  findAll(): Promise<Association[]> {
    return Promise.resolve(this.userModel.find());
  }

  create(CreateAssociationDto: CreateAssociationDto): Promise<Association> {
    const newUser = new this.userModel(CreateAssociationDto)
    return newUser.save();
   
  }

  findById(id: string) {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateAssociationDto: UpdateAssociationDto) {
    return  this.userModel.findByIdAndUpdate(id, updateAssociationDto).exec();
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
}
}

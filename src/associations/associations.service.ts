import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Association } from './interfaces/association.interface';
import { CreateAssociationDto } from './dto/create-association.dto';
import { DeleteAssociationDto } from './dto/delete-association.dto';
import { UpdateAssociationDto } from './dto/update-association.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class AssociationsService {
	constructor(
	@Inject('ASSOCIATION_MODEL')
	private associationModel: Model<Association>,
	) {}

	async create(createAssociationDto: CreateAssociationDto): Promise<Association> {
		const createdAssociation = new this.associationModel(createAssociationDto);
		return createdAssociation.save();
	}
  
	async delete(id: string): Promise<Association> {
		const deletedAssociation = await this.associationModel.findOneAndDelete({ _id: id }).exec();
		return deletedAssociation;
	}

	async update(id: string, updateAssociationDto: UpdateAssociationDto): Promise<Association> {
		const updatedAssociation = await this.associationModel.findByIdAndUpdate(id, updateAssociationDto, { new: true });
		if (!updatedAssociation) {
			throw new NotFoundException(`Association with ID ${id} not found`);
		}
		return updatedAssociation;
	}

	async updateUserAssociation(id: string, updateAssociationDto: UpdateAssociationDto): Promise<Association> {
		const updatedAssociation = await this.associationModel.findByIdAndUpdate(id, updateAssociationDto, { new: true });
		if (!updatedAssociation) {
			throw new NotFoundException(`Association with ID ${id} not found`);
		}
		return updatedAssociation;
	}

	async findAllByCategory(category){
        if(category.category == "all"){
            return this.associationModel.find().exec();
        }
        return this.associationModel.find(category).exec();
    }

	async findByUserId(userId: string): Promise<Association[]> {
		return this.associationModel.find({ user_id: userId }).exec();
	  }
	  

	async findAll(): Promise<Association[]> {
		return this.associationModel.find().exec();
	}

	async findOne(id: number): Promise<Association> {
		return this.associationModel.findById(id).exec();
	}

}

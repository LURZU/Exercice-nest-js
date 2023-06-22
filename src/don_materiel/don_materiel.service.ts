import { Inject, Injectable } from '@nestjs/common';
import { CreateDonMaterielDto } from './dto/create-don_materiel.dto';
import { UpdateDonMaterielDto } from './dto/update-don_materiel.dto';
import { DonMateriel } from './entities/don_materiel.entity';
import { Model } from 'mongoose';

@Injectable()
export class DonMaterielService {

  constructor(
    @Inject('DONMATERIEL_MODEL')
    private donmaterielModel: Model<DonMateriel>,
    ) {}

  async create(donmaterielData: Partial<DonMateriel>): Promise<DonMateriel> {
    const createdDonMateriel = new this.donmaterielModel(donmaterielData);
    return createdDonMateriel.save();
  }

  async findAll(): Promise<DonMateriel[]> {
    return this.donmaterielModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  async findByAssociationId(associationId: string): Promise<DonMateriel[]> {
		return this.donmaterielModel.find({ association_id: associationId }).exec();
	  }

  async update(id: string, updateDonMaterielDto: UpdateDonMaterielDto): Promise<DonMateriel> {
    return this.donmaterielModel.findByIdAndUpdate(id, updateDonMaterielDto, { new: true }).exec();
  }

  async delete(id: string): Promise<DonMateriel> {
    return this.donmaterielModel.findByIdAndRemove(id).exec();
  }
}

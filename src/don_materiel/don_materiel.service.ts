import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DonMateriel, DonMaterielDocument } from './schemas/don_materiel.schemas';
import { CreateDonMaterielDto } from './dto/create-don_materiel.dto';

@Injectable()
export class DonMaterielService {
  constructor(
    @InjectModel(DonMateriel.name) private donMaterielModel: Model<DonMaterielDocument>,
  ) {}

  async create(createDonMaterielDto: CreateDonMaterielDto): Promise<DonMateriel> {
    const createdDonMateriel = new this.donMaterielModel(createDonMaterielDto);
    return createdDonMateriel.save();
  }

  async findAll(): Promise<DonMateriel[]> {
    return this.donMaterielModel.find().exec();
  }

  async findOne(id: string): Promise<DonMateriel> {
    return this.donMaterielModel.findById(id).exec();
  }

  async update(id: string, createDonMaterielDto: CreateDonMaterielDto): Promise<DonMateriel> {
    return this.donMaterielModel.findByIdAndUpdate(id, createDonMaterielDto, {new: true}).exec();
  }
}

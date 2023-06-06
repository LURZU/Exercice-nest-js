import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {

  constructor(
    @Inject('CATEGORY_MODEL')
    private categoryModel: Model<Category>,
    ) {}

  async create(categoryData: Partial<Category>): Promise<Category> {
    const createdCategory = new this.categoryModel(categoryData);
    return createdCategory.save();
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Category> {
    return this.categoryModel.findByIdAndRemove(id).exec();
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Category } from './entities/category.entity';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({ summary: 'Create category' })
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @ApiOperation({ summary: 'Get all category' })
  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @ApiOperation({ summary: 'Find one category' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update category' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    return this.categoryService.update(id, updateCategoryDto);
  }


  @ApiOperation({ summary: 'Delete category' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Category> {
    return this.categoryService.delete(id);
  }
}

import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AssociationService } from './association.service';
import { CreateAssociationDto } from './dto/create-association.dto';
import { Association } from './entities/association.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateCrudTestDto } from 'src/crud-test/dto/update-crud-test.dto';
import { UpdateAssociationDto } from './dto/update-association.dto';


@ApiBearerAuth()
@ApiTags('association')

@Controller('association')
  @UseGuards(AuthGuard)
export class AssociationController {
  [x: string]: any;
  constructor(private readonly associationService: AssociationService) {}

  @Post()
  @ApiOperation({ summary: 'Create Association' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createAssociationDto: CreateAssociationDto): Promise<Association> {
    return this.associationService.create(createAssociationDto);
  }

  @Get()
  findAll(): Promise<Association[]> {
    return this.associationService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Association,
  })

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssociationDto: UpdateAssociationDto) {
    return this.associationService.update(id, updateAssociationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.associationService.remove(id);
  }


  findOne(@Param('id') id: string) {
    return this.associationService.findById(id);
  }
}

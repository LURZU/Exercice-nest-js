import { Body, Controller, Get, Param, Delete, Patch, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AssociationsService } from './associations.service';
import { CreateAssociationDto } from './dto/create-association.dto';
import { DeleteAssociationDto } from './dto/delete-association.dto';
import { UpdateAssociationDto } from './dto/update-association.dto';
import { Association } from './interfaces/association.interface';

import { Association as AssociationEntity } from './entities/association.entity';

@ApiBearerAuth()
@ApiTags('associations')
@Controller('associations')
export class AssociationsController {
  constructor(private readonly associationsService: AssociationsService) {}

  @Post('add')
  @ApiOperation({ summary: 'Create an association' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createAssociationDto: CreateAssociationDto): Promise<Association> {
    return this.associationsService.create(createAssociationDto);
  }

  @ApiOperation({ summary: 'Supprimer une association via un ID' })
  @ApiResponse({ status: 200, description: "L'association a bien été supprimé !" })
  @ApiResponse({ status: 404, description: "L'association n'a pas été trouvé" })
  @Delete(':id')
  async delete(@Param() deleteAssociationDto: DeleteAssociationDto): Promise<Association> {
    return this.associationsService.delete(deleteAssociationDto.id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Modifier une association' })
  @ApiResponse({ status: 200, description: "L'association a bien été modifié !" })
  @ApiResponse({ status: 404, description: "L'association n'a pas été trouvé" })
  async update(@Param('id') id: string, @Body() updateAssociationDto: UpdateAssociationDto): Promise<Association> {
    return this.associationsService.update(id, updateAssociationDto);
  }


  @Get('user/:userId')
  @ApiOperation({ summary: 'Trouver une association basée sur un user_id' })
  @ApiResponse({ status: 200, description: "L'association a bien été trouvé !" })
  @ApiResponse({ status: 404, description: "Aucune association n'a été trouvé pour cet utilisateur" })
  findOneByUserId(@Param('userId') userId: string): Promise<Association[]> {
    return this.associationsService.findByUserId(userId);
  }
  

  @Post('type')
    @ApiOperation({ summary: 'Find by category' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findAllByCategory(@Body() type) {
        return this.associationsService.findAllByCategory(type);
    };


  @Get()
  findAll(): Promise<Association[]> {
    return this.associationsService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: AssociationEntity,
  })
  findOne(@Param('id') id: string): Promise<Association> {
    return this.associationsService.findOne(id);
  }
}

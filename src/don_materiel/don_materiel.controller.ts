import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonMaterielService } from './don_materiel.service';
import { CreateDonMaterielDto } from './dto/create-don_materiel.dto';
import { UpdateDonMaterielDto } from './dto/update-don_materiel.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DonMateriel } from './entities/don_materiel.entity';

@ApiTags('don-materiel')
@Controller('don-materiel')
export class DonMaterielController {
  constructor(private readonly DonMaterielService: DonMaterielService) {}

  @ApiOperation({ summary: 'Create don' })
  @Post()
  create(@Body() createDonMaterielDto: CreateDonMaterielDto) {
    return this.DonMaterielService.create(createDonMaterielDto);
  }

  @ApiOperation({ summary: 'Get all don' })
  @Get()
  async findAll(): Promise<DonMateriel[]> {
    return this.DonMaterielService.findAll();
  }

  @ApiOperation({ summary: 'Find one don materiel' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.DonMaterielService.findOne(+id);
  }

  @Get('user/:associationId')
  @ApiOperation({ summary: 'Trouver une association basée sur un associationId' })
  @ApiResponse({ status: 200, description: "L'association a bien été trouvé !" })
  @ApiResponse({ status: 404, description: "Aucune association n'a été trouvé pour cet utilisateur" })
  findOneByUserId(@Param('associationId') associationId: string): Promise<DonMateriel[]> {
    return this.DonMaterielService.findByAssociationId(associationId);
  }

  @ApiOperation({ summary: 'Update don materiel' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateDonMaterielDto): Promise<DonMateriel> {
    return this.DonMaterielService.update(id, updateCategoryDto);
  }


  @ApiOperation({ summary: 'Delete don materiel' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<DonMateriel> {
    return this.DonMaterielService.delete(id);
  }
}

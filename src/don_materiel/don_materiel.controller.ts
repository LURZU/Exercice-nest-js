import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateDonMaterielDto } from './dto/create-don_materiel.dto';
import { DonMateriel } from './schemas/don_materiel.schemas';
import { DonMaterielService } from './don_materiel.service';

@Controller('don-materiel')
export class DonMaterielController {
  constructor(private readonly donMaterielService: DonMaterielService) {}

  @Post()
  create(@Body() createDonMaterielDto: CreateDonMaterielDto): Promise<DonMateriel> {
    return this.donMaterielService.create(createDonMaterielDto);
  }

  @Get()
  findAll(): Promise<DonMateriel[]> {
    return this.donMaterielService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DonMateriel> {
    return this.donMaterielService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createDonMaterielDto: CreateDonMaterielDto): Promise<DonMateriel> {
    return this.donMaterielService.update(id, createDonMaterielDto);
  }
}

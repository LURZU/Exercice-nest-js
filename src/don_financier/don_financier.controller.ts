import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonFinancierService } from './don_financier.service';
import { CreateDonFinancierDto } from './dto/create-don_financier.dto';
import { UpdateDonFinancierDto } from './dto/update-don_financier.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('don-financier')
@Controller('don-financier')
export class DonFinancierController {
  constructor(private readonly donFinancierService: DonFinancierService) {}

  @Post()
  create(@Body() createDonFinancierDto: CreateDonFinancierDto) {
    return this.donFinancierService.create(createDonFinancierDto);
  }

  @Get()
  findAll() {
    return this.donFinancierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donFinancierService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonFinancierDto: UpdateDonFinancierDto) {
    return this.donFinancierService.update(+id, updateDonFinancierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donFinancierService.remove(+id);
  }
}

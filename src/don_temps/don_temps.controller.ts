import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonTempsService } from './don_temps.service';
import { CreateDonTempDto } from './dto/create-don_temp.dto';
import { UpdateDonTempDto } from './dto/update-don_temp.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('don-temps')
@Controller('don-temps')
export class DonTempsController {
  constructor(private readonly donTempsService: DonTempsService) {}

  @Post()
  create(@Body() createDonTempDto: CreateDonTempDto) {
    return this.donTempsService.create(createDonTempDto);
  }

  @Get()
  findAll() {
    return this.donTempsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donTempsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonTempDto: UpdateDonTempDto) {
    return this.donTempsService.update(+id, updateDonTempDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donTempsService.remove(+id);
  }
}

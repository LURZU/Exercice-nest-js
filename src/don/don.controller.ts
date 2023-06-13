import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DonService } from './don.service';
import { CreateDonDto } from './dto/create-don.dto';
import { UpdateDonDto } from './dto/update-don.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('don')
@Controller('don')
@UseGuards(AuthGuard)
export class DonController {
  constructor(private readonly donService: DonService) {}

  @Post()
  create(@Body() createDonDto: CreateDonDto) {
    return this.donService.create(createDonDto);
  }

  @Get()
  findAll() {
    return this.donService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonDto: UpdateDonDto) {
    return this.donService.update(+id, updateDonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donService.remove(+id);
  }
}

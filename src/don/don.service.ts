import { Injectable } from '@nestjs/common';
import { CreateDonDto } from './dto/create-don.dto';
import { UpdateDonDto } from './dto/update-don.dto';

@Injectable()
export class DonService {
  create(createDonDto: CreateDonDto) {
    return 'This action adds a new don';
  }

  findAll() {
    return `This action returns all don`;
  }

  findOne(id: number) {
    return `This action returns a #${id} don`;
  }

  update(id: number, updateDonDto: UpdateDonDto) {
    return `This action updates a #${id} don`;
  }

  remove(id: number) {
    return `This action removes a #${id} don`;
  }
}

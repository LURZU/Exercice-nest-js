import { Injectable } from '@nestjs/common';
import { CreateDonTempDto } from './dto/create-don_temp.dto';
import { UpdateDonTempDto } from './dto/update-don_temp.dto';

@Injectable()
export class DonTempsService {
  create(createDonTempDto: CreateDonTempDto) {
    return 'This action adds a new donTemp';
  }

  findAll() {
    return `This action returns all donTemps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donTemp`;
  }

  update(id: number, updateDonTempDto: UpdateDonTempDto) {
    return `This action updates a #${id} donTemp`;
  }

  remove(id: number) {
    return `This action removes a #${id} donTemp`;
  }
}

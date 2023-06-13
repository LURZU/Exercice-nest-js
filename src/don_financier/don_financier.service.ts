import { Injectable } from '@nestjs/common';
import { CreateDonFinancierDto } from './dto/create-don_financier.dto';
import { UpdateDonFinancierDto } from './dto/update-don_financier.dto';

@Injectable()
export class DonFinancierService {
  create(createDonFinancierDto: CreateDonFinancierDto) {
    return 'This action adds a new donFinancier';
  }

  findAll() {
    return `This action returns all donFinancier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donFinancier`;
  }

  update(id: number, updateDonFinancierDto: UpdateDonFinancierDto) {
    return `This action updates a #${id} donFinancier`;
  }

  remove(id: number) {
    return `This action removes a #${id} donFinancier`;
  }
}

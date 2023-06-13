import { PartialType } from '@nestjs/swagger';
import { CreateDonTempDto } from './create-don_temp.dto';

export class UpdateDonTempDto extends PartialType(CreateDonTempDto) {}

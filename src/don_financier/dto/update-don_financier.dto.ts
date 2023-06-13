import { PartialType } from '@nestjs/swagger';
import { CreateDonFinancierDto } from './create-don_financier.dto';

export class UpdateDonFinancierDto extends PartialType(CreateDonFinancierDto) {}

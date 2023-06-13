import { Module } from '@nestjs/common';
import { DonFinancierService } from './don_financier.service';
import { DonFinancierController } from './don_financier.controller';

@Module({
  controllers: [DonFinancierController],
  providers: [DonFinancierService]
})
export class DonFinancierModule {}

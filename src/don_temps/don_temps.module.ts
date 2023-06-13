import { Module } from '@nestjs/common';
import { DonTempsService } from './don_temps.service';
import { DonTempsController } from './don_temps.controller';

@Module({
  controllers: [DonTempsController],
  providers: [DonTempsService]
})
export class DonTempsModule {}

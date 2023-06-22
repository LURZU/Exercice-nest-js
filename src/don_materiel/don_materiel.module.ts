import { Module } from '@nestjs/common';
import { DonMaterielController } from './don_materiel.controller';
import { DonMaterielService } from './don_materiel.service';
import { DonMaterielProviders } from './don_materiel.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DonMaterielController],
  providers: [
    DonMaterielService,
    ...DonMaterielProviders,
  ],
})
export class DonMaterielModule {}
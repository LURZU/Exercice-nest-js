import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DonMaterielService } from './don_materiel.service';
import { DonMaterielController } from './don_materiel.controller';
import { DonMateriel, DonMaterielSchema } from './schemas/don_materiel.schemas';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: DonMateriel.name, schema: DonMaterielSchema }]),
  ],
  providers: [DonMaterielService],
  controllers: [DonMaterielController],
  
})
export class DonMaterielModule {}

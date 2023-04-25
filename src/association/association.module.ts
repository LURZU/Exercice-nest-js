import { Module } from '@nestjs/common';
import { AssociationController } from './association.controller';
import { AssociationService } from './association.service';
import { AssociationProviders } from './association.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AssociationController],
  providers: [
    AssociationService,
    ...AssociationProviders,
  ],
})
export class AssociationModule {}
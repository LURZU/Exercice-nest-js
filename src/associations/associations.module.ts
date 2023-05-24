
import { Module } from '@nestjs/common';
import { AssociationsController } from './associations.controller';
import { AssociationsService } from './associations.service';
import { associationsProviders } from './associations.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AssociationsController],
  providers: [
    AssociationsService,
    ...associationsProviders,
  ],
})
export class AssociationsModule {}

import { Module } from '@nestjs/common';
import { DonService } from './don.service';
import { DonController } from './don.controller';

import { DonProviders } from './don.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [DonService,
    ...DonProviders,],
  exports: [DonService],
    controllers: [DonController],
    imports: [DatabaseModule],
})
export class DonModule {}

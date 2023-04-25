import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { UsersProviders } from './users.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [UsersService,
    ...UsersProviders,],
  exports: [UsersService],
    controllers: [UsersController],
    imports: [DatabaseModule],
})
export class UsersModule {}

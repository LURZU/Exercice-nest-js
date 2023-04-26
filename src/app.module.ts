import { Module } from '@nestjs/common';
import { AssociationModule } from './association/association.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';

import configuration from './config/configuration';

@Module({
  imports: [ AssociationModule, AuthModule, UsersModule, ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env',   load: [configuration] })],
})


export class AppModule {}

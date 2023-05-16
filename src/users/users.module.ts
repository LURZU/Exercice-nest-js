import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { UsersProviders } from './users.provider';

import { DatabaseModule } from 'src/database/database.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { VerificationController } from './verification.controller';


@Module({
  providers: [UsersService,
    ...UsersProviders],
  exports: [UsersService  ],
    controllers: [UsersController, VerificationController],
    imports: [DatabaseModule, MailerModule.forRoot({
      transport: {
        host: 'ssl0.ovh.net',
        port: 465,
        auth: {
          user: 'alt-int@studiodefacto.com',
          pass: 'Shey4Z54x-dzxH1!!',
        },
      },
    })] 
  })
export class UsersModule {

}

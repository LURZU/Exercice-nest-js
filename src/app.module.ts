import { Module } from '@nestjs/common';
import { AssociationsModule } from './associations/associations.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { DonModule } from './don/don.module';
import { CategoryModule } from './category/category.module';
import { DonMaterielModule } from './don_materiel/don_materiel.module';
import { DonFinancierModule } from './don_financier/don_financier.module';
import { DonTempsModule } from './don_temps/don_temps.module';



import configuration from './config/configuration';

@Module({
  imports: [ AssociationsModule, AuthModule, UsersModule, ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env',   load: [configuration] }), DonModule, CategoryModule, DonFinancierModule, DonTempsModule, DonMaterielModule],
})


export class AppModule {}

import { Prop } from '@nestjs/mongoose';
import { IsArray, IsString } from 'class-validator';
import { Types, Schema as MongooseSchema } from 'mongoose';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class CreateDonMaterielDto {

  @IsString()
  object_name: string;

  @IsString()
  user_id: string;

  @IsArray()
  @IsString({ each: true })
  image_urls: string[];

  @CreateDateColumn()
  created_at: Date; // Creation date

  @UpdateDateColumn()
  updated_at: Date; // Last updated date
}

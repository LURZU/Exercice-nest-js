import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsArray, IsString } from 'class-validator';

export type DonMaterielDocument = DonMateriel & Document;

@Schema()
export class DonMateriel {
  @IsString()
  @Prop({ required: true })
  object_name: string;

  @IsString()
  @Prop({ required: true })
  created_by: string;

  @IsString()
  @Prop({ required: true })
  user_id: string;

  @IsString()
  @Prop({ required: true })
  association_id: string;

  @IsArray()
  @IsString({ each: true })
  @Prop({ required: true })
  image_urls: string[];

  @Prop({ default: Date.now })
  created_at: Date; 

  @Prop({ default: Date.now })
  updated_at: Date;
}

export const DonMaterielSchema = SchemaFactory.createForClass(DonMateriel);

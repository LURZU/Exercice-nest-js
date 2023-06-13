import { PartialType } from '@nestjs/swagger';
import { CreateDonMaterielDto } from './create-don_materiel.dto';
import { IsArray, IsString } from 'class-validator';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class UpdateDonMaterielDto extends PartialType(CreateDonMaterielDto) {
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

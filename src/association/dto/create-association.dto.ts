import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsString } from 'class-validator';
import { Document } from 'mongoose';

export class CreateAssociationDto {
    @IsString()
    readonly name: string;
  
    @IsInt()
    readonly age: number;
  
    @IsString()
    readonly breed: string;

    @IsString()
    readonly lon: string;

    @IsString()
    readonly lat: string;
}

export interface Association extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
  readonly lat: string;
  readonly lon: string;

}


import {  IsInt, IsString } from 'class-validator';
import { Document } from 'mongoose';

export class CreateAssociationDto {
    @IsString()
    readonly rna_number: string;
  
    @IsInt()
    readonly name: number;
  
    @IsString()
    readonly adress: string;

    @IsString()
    readonly phone: string;

    @IsString()
    readonly type: string;

    @IsString()
    readonly lat: string;

    @IsString()
    readonly lon: string;



}

export interface Association extends Document {
  readonly ma_number: string;
  readonly name: string;
  readonly adress: number;
  readonly phone: string;
  readonly type: string;
  readonly lat: string;
  readonly lon: string;

}

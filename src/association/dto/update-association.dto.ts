import { PartialType } from '@nestjs/swagger';
import { CreateAssociationDto } from './create-association.dto';
import { IsInt, IsString } from 'class-validator';

export class UpdateAssociationDto extends PartialType(CreateAssociationDto) {
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



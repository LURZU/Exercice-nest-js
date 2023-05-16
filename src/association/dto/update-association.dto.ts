import { PartialType } from '@nestjs/swagger';
import { CreateAssociationDto } from './create-association.dto';
import { IsInt, IsString } from 'class-validator';

export class UpdateAssociationDto extends PartialType(CreateAssociationDto) {
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



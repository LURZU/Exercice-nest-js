import { PartialType } from '@nestjs/swagger';
import { CreateDonDto } from './create-don.dto';
import { IsString } from 'class-validator';

export class UpdateDonDto extends PartialType(CreateDonDto) {

    @IsString()
    type : string;
  
    @IsString()
    value: string;
  
    @IsString()
    id_user : string;
  
      @IsString()
      username: string;
}

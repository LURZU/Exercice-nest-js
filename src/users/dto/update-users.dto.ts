import { PartialType } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import { CreateUsersDto } from './create-users.dto';

export class UpdateUsersDto extends PartialType(CreateUsersDto) {


    @IsString()
    readonly email: string;
  
    @IsString()
    readonly password: string;

    @IsString()
    type: string;
  
    @IsString()
    verificationToken?: string;
  
    @IsString()
    isEmailVerified: boolean;
  
    @IsString()
    phone: string;
  
    @IsString()
    adress: string;
  
    @IsString()
    first_name: string;
  
    @IsString()
    roles: string;
  
    @IsBoolean()
    bool_newsletter: boolean;
  
    @IsBoolean()
    first_connexion: boolean;
}



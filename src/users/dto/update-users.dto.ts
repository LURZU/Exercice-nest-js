import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateUsersDto } from './create-users.dto';

export class UpdateUsersDto extends PartialType(CreateUsersDto) {


    @IsString()
    readonly username: string;
  
    @IsString()
    readonly password: string;

    @IsString()
    readonly type: string;

    @IsString()
    readonly verificationToken?: string;
}



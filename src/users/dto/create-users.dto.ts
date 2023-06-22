import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { Document } from 'mongoose';

export class CreateUsersDto {

  @IsString()
  email: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  type: string;

  @IsString()
  verificationToken?: string;

  @IsString()
  isEmailVerified: boolean;

  @IsString()
  profile_picture?: string;

  @IsString()
  phone: string;

  @IsString()
  adress: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsBoolean()
  bool_newsletter: boolean;

  @IsBoolean()
  first_connexion: boolean;
  
}

export interface Users extends Document {
  readonly email: string;
  readonly password: string;
  readonly type: string;
  readonly verificationToken?: string;
}


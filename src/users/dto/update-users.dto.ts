import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDto } from './create-users.dto';
import { IsString, IsOptional, IsEmail, IsBoolean, IsNotEmpty, IsNumberString } from 'class-validator';

export class UpdateUsersDto extends PartialType(CreateUsersDto) {
  @IsOptional()
  @IsString()
  first_name?: string;

  @IsOptional()
  @IsString()
  last_name?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsNumberString()
  category_id?: number;

  @IsOptional()
  @IsBoolean()
  bool_newsletter?: boolean;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsEmail()
  emails?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsBoolean()
  isEmailVerified?: boolean;

  @IsOptional()
  @IsBoolean()
  first_connexion?: boolean;
}

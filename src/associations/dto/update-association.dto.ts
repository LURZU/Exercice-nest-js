import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateAssociationDto {

  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsString()
  readonly adresse?: string;

  @IsOptional()
  @IsString()
  readonly profil_picture?: string;

  @IsOptional()
  @IsString()
  readonly town?: number;

  @IsOptional()
  @IsNumber()
  readonly postcode?: number;

  @IsOptional()
  @IsString()
  readonly coordinate?: string;

  @IsOptional()
  @IsNumber()
  readonly phone?: string;

  @IsOptional()
  @IsString()
  readonly type?: string;

  @IsOptional()
  @IsNumber()
  readonly user_id?: string;
}
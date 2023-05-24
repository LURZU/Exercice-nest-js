import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateAssociationDto {

  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly adresse?: string;

  @IsOptional()
  @IsNumber()
  readonly town?: number;

  @IsOptional()
  @IsNumber()
  readonly postcode?: number;

  @IsOptional()
  @IsString()
  readonly coordinate?: string;

  @IsOptional()
  @IsNumber()
  readonly phone?: number;

  @IsOptional()
  @IsString()
  readonly type?: string;
}
import { IsInt, IsString } from 'class-validator';

export class CreateAssociationDto {
  @IsString()
  rna: string;

  @IsString()
  name: string;

  @IsString()
  profil_picture: string;

  @IsString()
  description: string;

  @IsString()
  adresse: string;

  @IsString()
  town: string;

  @IsInt()
  postcode: number;

  @IsString()
  coordinate: string;

  @IsInt()
  phone: number;

  @IsString()
  type: string;

  @IsString()
  user_id: string;
}
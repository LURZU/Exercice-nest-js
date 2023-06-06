import { IsInt, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;
}

export interface Users extends Document {
    readonly name: string;
  }
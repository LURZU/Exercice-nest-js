import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Document, Schema } from 'mongoose';

export class CreateUsersDto extends Document {

  @IsString()
  readonly username: string;

  @IsString()
  password: string;
  
}

export interface Users extends Document {
  readonly username: string;
  readonly password: number;

}
function Prop(arg0: { type: any; auto: boolean; }): (target: CreateUsersDto, propertyKey: "_id") => void {
  throw new Error('Function not implemented.');
}


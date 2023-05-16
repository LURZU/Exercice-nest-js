
import { IsString } from 'class-validator';
import { Document } from 'mongoose';

export class CreateDonDto extends Document {

  @IsString()
  type : string;

  @IsString()
  value: string;

  @IsString()
  id_user : string;

    @IsString()
    email: string;
}

export interface Don extends Document {
  readonly type: string;
}


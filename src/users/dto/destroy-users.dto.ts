import { IsBoolean, IsString } from 'class-validator';
import { Document } from 'mongoose';

export class DestroyUsersDto extends Document {
  readonly id: string;
}

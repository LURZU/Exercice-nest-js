import { IsBoolean, IsString } from 'class-validator';
import { Document } from 'mongoose';

export class DestroyUsersDto  {
  readonly id: string;
}

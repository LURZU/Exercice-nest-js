
import { IsString } from 'class-validator';
import { Document } from 'mongoose';

export class CreateUsersDto extends Document {

  @IsString()
  readonly username: string;

  @IsString()
  password: string;

  @IsString()
  type: string;

  @IsString()
  verificationToken?: string;

  @IsString()
  readonly isEmailVerified: boolean;
  
}

export interface Users extends Document {
  readonly username: string;
  readonly password: string;
  readonly type: string;
  readonly verificationToken?: string;
}


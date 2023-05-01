import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  username: {type: String, unique: true, required: true},
  password: String,
  type: String,
  isEmailVerified: Boolean,
  verificationToken: String,
});



export interface UserDocument extends Document {
  username: string;
  password: string;
  isEmailVerified: boolean;
  verificationToken: string | null;
}
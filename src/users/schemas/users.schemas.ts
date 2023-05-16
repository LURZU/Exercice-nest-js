import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  email: {type: String, unique: true, required: true},
  username: {type: String, unique: true},
  password: String,
  type: String,
  isEmailVerified: Boolean,
  verificationToken: String,
  first_connexion: Boolean,
});



export interface UserDocument extends Document {
  email: string;
  password: string;
  isEmailVerified: boolean;
  verificationToken: string | null;
  first_connexion: boolean;
}
import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  email: {type: String, unique: true, required: true},
  username: {type: String, unique: true},
  first_name: String,
  last_name: String,
  password: String,
  type: String,
  isEmailVerified: Boolean,
  verificationToken: String,
  first_connexion: Boolean,
  bool_newsletter: Boolean,
  role: String,
  phone: String,
  address: String,

});



export interface UserDocument extends Document {
  email: string;
  password: string;
  username : string;
  type: string;
  isEmailVerified: boolean;
  verificationToken: string | null;
  first_connexion: boolean;
  first_name: string| null;
  last_name: string| null;
  bool_newsletter: boolean;
  role: string | null;
  phone: string | null;
  address: string | null;
}
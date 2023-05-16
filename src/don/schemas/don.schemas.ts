import * as mongoose from 'mongoose';

export const DonSchema = new mongoose.Schema({
  email: {type: String, unique: true, required: true},
  password: String,
  type: String 
});
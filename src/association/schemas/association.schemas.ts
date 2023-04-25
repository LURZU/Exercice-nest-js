import * as mongoose from 'mongoose';

export const AssociationSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
    lat: String,
    lon: String,
});
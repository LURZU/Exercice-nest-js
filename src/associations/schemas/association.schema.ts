import * as mongoose from 'mongoose';

export const AssociationSchema = new mongoose.Schema({
  rna: String,
  name: String,
  adresse: String,
  town: String,
  postcode: Number,
  coordinate: String,
  phone: Number,
  type: String,
});
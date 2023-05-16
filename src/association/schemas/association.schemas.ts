import * as mongoose from 'mongoose';

export const AssociationSchema = new mongoose.Schema({
  rna_number: String,
  name: String,
  adress: String,
  phone: String,
  type: String,
    lat: String,
    lon: String,
});
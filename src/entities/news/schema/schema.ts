import mongoose, { Schema } from 'mongoose';
import { INewDocument } from './types';

export const newSchema: Schema<INewDocument> = new Schema<INewDocument>({
  _id: String,
  title: {
    type: String,
    required: true,
    unique: false,
  },
  text: {
    type: String,
    required: true,
    unique: false,
  },
  date: {
    type: String,
    required: true,
    unique: false,
  },
  views: {
    type: Number,
    required: true,
    unique: false,
    default: 0,
  },
  imageURL: {
    type: String,
    required: false,
    unique: false,
  },
});

export const newModel =
  mongoose.models.newModel ||
  mongoose.model<INewDocument>('newModel', newSchema);

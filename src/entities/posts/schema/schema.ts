import { IPostDocument } from './types';
import mongoose, { Schema } from 'mongoose';

export const postSchema: Schema<IPostDocument> = new Schema<IPostDocument>({
  _id: String,
  title: {
    type: String,
    required: true,
    unique: false,
  },
  description: {
    type: String,
    required: false,
    unique: false,
  },
  text: {
    type: String,
    required: true,
    unique: false,
  },
  rating: {
    type: Number,
    required: true,
    unique: false,
    default: 0,
  },
  views: {
    type: Number,
    required: true,
    unique: false,
    default: 0,
  },
  date: {
    type: String,
    required: true,
    unique: false,
  }
});

export const postModel =
  mongoose.models.postModel ||
  mongoose.model<IPostDocument>('postModel', postSchema);

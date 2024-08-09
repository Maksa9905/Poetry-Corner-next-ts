import { Schema } from 'mongoose';
import mongoose from 'mongoose';
import { postSchema } from '@/entities/posts/schema';
import { IAuthorDocument, IAuthorModel } from './types';

export const authorSchema: Schema<IAuthorDocument> =
  new Schema<IAuthorDocument>({
    _id: String,
    avatarUrl: String,
    nickName: {
      type: String,
      unique: true,
      required: true,
    },
    penName: {
      type: String,
      unique: false,
      required: true,
    },
    quote: {
      type: String,
      required: false,
      unique: false,
    },
    information: {
      gender: {
        type: String,
        required: true,
        enum: ['male', 'female'],
      },
      birthsday: {
        type: String,
        required: false,
      },
      contacts: {
        vk: {
          type: String,
          required: false,
        },
        telegram: {
          type: String,
          required: false,
        },
      },
    },
    posts: [postSchema],
  });

export const authorModel =
  mongoose.models.authorModel ||
  mongoose.model<IAuthorDocument, IAuthorModel>('authorModel', authorSchema);

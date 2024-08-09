import { IPost } from '@/entities/posts';
import mongoose from 'mongoose';

export interface IPostDocument
  extends IPost,
    mongoose.Document<string, any, any> {}

export interface IPostModel extends mongoose.Model<IPostDocument> {}

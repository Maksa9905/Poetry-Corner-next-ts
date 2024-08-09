import { IAuthor } from '@/entities/authors';
import { IPost } from '@/entities/posts';
import mongoose from 'mongoose';

export interface IAuthorDocument<TPost = IPost>
  extends IAuthor<TPost>,
    mongoose.Document<string, any, any> {}

export interface IAuthorModel
  extends mongoose.Model<IAuthorDocument, IAuthorModel> {}

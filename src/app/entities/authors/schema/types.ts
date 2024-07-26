import { IAuthor } from '@/app/entities/authors';
import { IPost } from '@/app/entities/posts';
import mongoose from 'mongoose';

export interface IAuthorDocument<TPost = IPost>
  extends IAuthor<TPost>,
    mongoose.Document<string, any, any> {}

export interface IAuthorModel
  extends mongoose.Model<IAuthorDocument, IAuthorModel> {}

import { INew } from '@/entities/news';
import { Document, Model } from 'mongoose';

export interface INewDocument extends INew, Document<string, any, any> {}

export interface INewModel extends Model<INewDocument> {}

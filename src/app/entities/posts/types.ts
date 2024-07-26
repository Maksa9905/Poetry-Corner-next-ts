import mongoose from 'mongoose';

export interface IPost {
  title: string;
  description: string;
  text: string;
  rating: number;
  views: number;
}

export interface IPostsReponse {
  length: number;
  posts: IPostResponse[];
}

export interface IPostResponse extends IPost {
  _id: string;
}

import { IAuthorResponse } from '../authors';

export interface IPost {
  title: string;
  description: string;
  text: string;
  date: string;
  rating: number;
  views: number;
  author?: IAuthorResponse;
}

export interface IPostsResponse {
  length: number;
  posts: IPostResponse[];
}

export interface IPostResponse extends IPost {
  _id?: string;
}

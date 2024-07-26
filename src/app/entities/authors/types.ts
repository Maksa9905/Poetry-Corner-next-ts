import { IPost } from '../posts';

export interface IAuthor<TPost> {
  avatarUrl: string;
  nickName: string;
  penName: string;
  quote: string;
  information: {
    gender: string;
    birthsday: string;
    contacts: {
      vk: string;
      telegram: string;
    };
  };
  views: number;
  rating: number;
  posts: TPost[];
}

export interface IAuthorResponse<TPost = IPost> extends IAuthor<TPost> {
  _id: string;
}

export interface IAuthorsResponse<TPost = IPost> {
  length: number;
  authors: IAuthorResponse<TPost>[];
}
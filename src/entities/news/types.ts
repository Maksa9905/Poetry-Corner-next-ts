export interface INew {
  title: string;
  text: string;
  date: string;
  views: number;
  imageURL: string;
}

export interface INewsResponse {
  length: number;
  news: INew[];
}

export interface INewResponse extends INew {
  _id?: string;
}

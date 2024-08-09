import mongoose from 'mongoose';
import { connectToDataBase } from '../helpers/connect';
import { authorModel, IAuthorDocument } from '../../../entities/authors/schema';
import { IPostResponse } from '@/entities/posts';
import { IAuthorResponse } from '@/entities/authors';
import { randomBytes } from 'crypto';

try {
  connectToDataBase();
} catch (e: any) {
  console.log(e.data.message);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const _id = searchParams.get('_id');

  if (_id) {
    const _id = searchParams.get('_id');
    const currentAuthor: IAuthorDocument | null = await authorModel.findOne({
      _id: _id,
    });
    if (currentAuthor) {
      const views = currentAuthor.posts.reduce((views, currentPost) => {
        return views + currentPost.views;
      }, 0);
      const rating =
        currentAuthor.posts.reduce((rating, currentPost) => {
          return rating + currentPost.rating;
        }, 0) / currentAuthor.posts.length;
      return new Response(
        JSON.stringify({ ...currentAuthor.toObject(), views, rating }),
      );
    } else {
      return new Response('Author not found', { status: 404 });
    }
  } else {
    const authors: IAuthorDocument<IPostResponse>[] = await authorModel.find();

    const response = {
      length: authors.length,
      authors: {
        ...authors.map((author) => {
          const views = author.posts.reduce((views, currentPost) => {
            return views + currentPost.views;
          }, 0);
          const rating =
            author.posts.reduce((rating, currentPost) => {
              return rating + currentPost.rating;
            }, 0) / author.posts.length;
          return { ...author.toObject(), views, rating };
        }),
      },
    };
    return new Response(JSON.stringify(response));
  }
}

export async function POST(req: Request) {
  const body = await req.json();

  const newAuthor: IAuthorDocument = new authorModel<
    IAuthorResponse<IPostResponse>
  >({
    _id: new mongoose.Types.ObjectId().toString(),
    avatarUrl: body.avatarUrl,
    nickName: body.nickName,
    penName: body.penName,
    quote: body.quote,
    information: body.information,
    posts: [],
    views: 0,
    rating: 0,
  });

  await newAuthor.save();
  return new Response(JSON.stringify(newAuthor));
}

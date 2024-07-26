import { IPostDocument, postModel } from '../../entities/posts/schema';
import mongoose from 'mongoose';
import { connectToDataBase } from '../helpers/connect';
import { authorModel, IAuthorDocument } from '../../entities/authors/schema';
import { IPost, IPostResponse } from '@/app/entities/posts';

try {
  connectToDataBase();
} catch (e: any) {
  console.log(e.data.message);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { searchParams } = new URL(req.url);

  const currentAuthor: IAuthorDocument | null = await authorModel.findOne({
    _id: searchParams.get('_id'),
  });

  if (currentAuthor) {
    const newPost: IPostResponse = new postModel({
      _id: new mongoose.Types.ObjectId(),
      title: body.title,
      description: body.description,
      text: body.text,
      rating: 0,
      views: 0,
    });

    await currentAuthor?.posts.push(newPost);
    await currentAuthor?.save();
    return new Response(JSON.stringify(newPost));
  } else {
    return new Response('Author not found', { status: 404 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search');
  const authors: IAuthorDocument<IPostDocument>[] = await authorModel.find();
  const posts: IPostDocument[] = authors.reduce(
    (posts: IPostDocument[], author) => {
      return [...posts, ...author.posts];
    },
    [],
  );

  if (search) {
    const searchByTitlePosts = posts.filter((post) =>
      post.title.includes(search),
    );
    const response = {
      length: searchByTitlePosts.length,
      posts: searchByTitlePosts,
    };
    return new Response(JSON.stringify(searchByTitlePosts));
  } else {
    const authors: IAuthorDocument[] = await authorModel.find();
    const posts = authors.reduce((posts: IPost[], author) => {
      return [...posts, ...author.posts];
    }, []);

    const response = {
      length: posts.length,
      posts: posts,
    };

    return new Response(JSON.stringify(response));
  }
}

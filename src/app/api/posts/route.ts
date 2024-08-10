import { IPostDocument, postModel } from '@/entities/posts';
import mongoose from 'mongoose';
import { connectToDataBase } from '../helpers/connect';
import { authorModel, IAuthorDocument } from '@/entities/authors';
import { IPost, IPostResponse } from '@/entities/posts';
import { IPostsResponse } from '@/entities/posts';
import { SortDirection, sorting, SortType } from '@/app/features/Sorting';

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
      date: new Date().toISOString(),
    });

    await currentAuthor?.posts?.push(newPost);
    await currentAuthor?.save();
    return new Response(JSON.stringify(newPost));
  } else {
    return new Response('Author not found', { status: 404 });
  }
}

export async function GET(req: Request) {
  console.log('WTF, where is query?!?!??!');
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search');
  const direction = (searchParams.get('direction') ?? 'desc') as SortDirection;
  const sort = (searchParams.get('sort') ?? 'newest') as SortType;
  const authors: IAuthorDocument<IPostDocument>[] = await authorModel.find();
  const posts = authors.reduce((posts: IPostDocument[], author) => {
    return [...posts, ...author.posts!];
  }, []);
  const sortedPosts = sorting(posts, sort, direction);

  if (search) {
    const searchByTitlePosts = sortedPosts.filter((post) =>
      post.title.includes(search),
    );
    const response: IPostsResponse = {
      length: searchByTitlePosts.length,
      posts: searchByTitlePosts.map((post) => ({
        ...post,
        author: post.$parent() as IAuthorDocument<IPostResponse>,
      })),
    };
    return new Response(JSON.stringify(searchByTitlePosts));
  } else {
    const response: IPostsResponse = {
      length: sortedPosts.length,
      posts: sortedPosts.map((post) => {
        return {
          ...post.toObject(),
          author: post.$parent() as IAuthorDocument<IPostResponse>,
        };
      }),
    };

    return new Response(JSON.stringify(response));
  }
}

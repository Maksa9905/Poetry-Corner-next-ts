import { connectToDataBase } from '../helpers/connect';
import { IPostDocument } from '../../../entities/posts/schema';
import { authorModel, IAuthorDocument } from '@/entities/authors/schema';
import { findPost } from '../helpers/findPost';

try {
  connectToDataBase();
} catch (e: any) {
  console.log(e.data.message);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const _id = searchParams.get('_id');
  const authors: IAuthorDocument<IPostDocument>[] = await authorModel.find();

  if (_id) {
    const currentPost = findPost(_id, authors);
    if (currentPost) {
      return new Response(JSON.stringify(currentPost));
    } else {
      return new Response('Post not found', { status: 404 });
    }
  } else {
    return new Response('Enter _id', { status: 501 });
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const _id = searchParams.get('_id');
  const authors: IAuthorDocument<IPostDocument>[] = await authorModel.find();

  if (_id) {
    const currentPost = findPost(_id, authors);
    if (currentPost) {
      const author = await currentPost.$parent();
      await currentPost.deleteOne();
      await author?.save();
      return new Response(JSON.stringify(currentPost));
    } else {
      return new Response('Post not found', { status: 404 });
    }
  } else {
    return new Response('Enter _id', { status: 501 });
  }
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { searchParams } = new URL(req.url);
  const _id = searchParams.get('_id');
  const authors: IAuthorDocument<IPostDocument>[] = await authorModel.find();

  if (_id) {
    const currentPost = findPost(_id, authors);
    if (currentPost) {
      currentPost.title = body.title;
      currentPost.description = body.description;
      currentPost.text = body.text;
      currentPost.rating = body.rating;
      currentPost.views = body.views;
      currentPost.date = new Date().toISOString();
      const author = await currentPost.$parent();
      await author?.save();
      return new Response(JSON.stringify(currentPost));
    } else {
      return new Response('Post not found', { status: 404 });
    }
  } else {
    return new Response('Enter _id', { status: 501 });
  }
}

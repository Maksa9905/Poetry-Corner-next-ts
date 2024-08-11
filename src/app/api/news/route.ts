import { connectToDataBase } from '@/app/api/helpers/connect';
import { INewModel, INewResponse } from '@/entities/news';
import { INewDocument, newModel } from '@/entities/news/schema';
import mongoose from 'mongoose';

try {
  connectToDataBase();
} catch (e: any) {
  console.log(e.data.message);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const _id = searchParams.get('_id');

  if (_id) {
    const currentNew: INewDocument | null = await newModel.findOne({
      _id: _id,
    });

    if (currentNew) {
      return new Response(JSON.stringify(currentNew));
    } else {
      return new Response('New not found', { status: 404 });
    }
  } else {
    const news = await newModel.find();
    return new Response(JSON.stringify(news));
  }
}

export async function POST(req: Request) {
  const request = await req.json();

  const newNew = new newModel({
    _id: new mongoose.Types.ObjectId(),
    title: request.title,
    text: request.text,
    date: new Date().toISOString(),
    views: 0,
    imageURL: request.imageURL,
  });

  await newNew.save();
  return new Response(JSON.stringify(newNew));
}

export async function PUT(req: Request) {
  const request = await req.json();
  const currentNew: INewDocument | null = await newModel.findOne({
    _id: request._id,
  });

  if (currentNew) {
    currentNew.title = request.title;
    currentNew.text = request.text;
    currentNew.date = new Date().toISOString();
    currentNew.views = request.views;
    currentNew.imageURL = request.imageURL;
    await currentNew.save();
    return new Response(JSON.stringify(currentNew));
  } else {
    return new Response('New not found', { status: 404 });
  }
}

import mongoose from 'mongoose';

export function connectToDataBase() {
  if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
  } else {
    throw new Error('not found MONGODB_URI. Please check .env file');
  }
}

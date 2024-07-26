import { IAuthorDocument } from '@/app/entities/authors/schema';
import { IPostDocument } from '@/app/entities/posts/schema';

export function findPost(
  _id: string,
  authors: IAuthorDocument<IPostDocument>[],
) {
  const posts: IPostDocument[] = authors.reduce(
    (posts: IPostDocument[], author) => {
      return [...posts, ...author.posts];
    },
    [],
  );
  const currentPost = posts.find((post) => post._id === _id);
  return currentPost;
}

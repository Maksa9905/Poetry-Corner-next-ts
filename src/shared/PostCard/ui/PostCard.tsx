import Link from 'next/link';
import { Rating } from '@mui/material';
import { dateConverter } from '@/app/features/DateConverter';
import { IPostResponse } from '@/entities/posts';

export interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {
  post: IPostResponse;
}

export default function PostCard({ post, ...restProps }: PostCardProps) {
  return (
    <div {...restProps}>
      <h4 className='text-[20px] font-[500]'>
        <Link className='hover:text-red' href={`/posts/${post._id}`}>
          {`"${post.title}"`}{' '}
        </Link>{' '}
        -{' '}
        <Link
          href={`/authors/${post.author?._id}`}
          className='hover:text-red text-monochrome_03'
        >
          {' '}
          {post?.author?.penName}
        </Link>
      </h4>
      <Rating name='read-only' size='small' value={post.rating} readOnly />
      <p className='line-clamp-3'>
        {`"`}
        {post.description ?? post.text}
        {`"`}
      </p>
      <p className='text-neutral_02'>{dateConverter(post.date)}</p>
    </div>
  );
}

import { INewResponse } from '@/entities/news';
import Link from 'next/link';

export default function RecentNewsItem({ post: post }: { post: INewResponse }) {
  return (
    <div key={post._id}>
      <h4 className='line-clamp-2 leading-[28px] hover:text-red'>
        <Link href='/news'>{post.title}</Link>
      </h4>
      <p className='line-clamp-2 mt-[7px]'>{post.text}</p>
    </div>
  );
}

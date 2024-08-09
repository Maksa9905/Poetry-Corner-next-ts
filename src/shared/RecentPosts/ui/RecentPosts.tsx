'use client';
import {
  IMediaQuery,
  useGridInitialization,
} from '@/hooks/useGridInitialization';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SearchQueryContext } from '@/contexts/SearchQueryContext';
import { useContext, useEffect, useState } from 'react';
import { IPostResponse, IPostsResponse } from '@/entities/posts';
import { QueryStatusType } from '@/entities/query/types';
import { IAuthorResponse } from '@/entities/authors';
import PostCard from '@/shared/PostCard/ui/PostCard';

async function getPosts(): Promise<IPostsResponse> {
  const posts = await fetch('http://localhost:3000/api/posts');
  return await posts.json();
}

export interface RecentPostsProps<TPost = IPostResponse> {
  recentPostsGrid: IMediaQuery;
  direction: 'vertical' | 'horizontal';
  author?: IAuthorResponse<TPost>;
}

export default function RecentPosts({
  recentPostsGrid,
  direction,
  author,
}: RecentPostsProps) {
  const postsGrid = useGridInitialization(recentPostsGrid);
  const [posts, setPosts] = useState<IPostsResponse>();
  const [queryStatus, setQueryStatus] = useState<QueryStatusType>('idle');
  const router = useRouter();
  const authorNickname = author?.nickName;
  const [searchQuery, setSearchQuery] = useContext(SearchQueryContext);

  useEffect(() => {
    setQueryStatus('loading');
    getPosts().then((res) => {
      setPosts(res);
      setQueryStatus('success');
    });
  }, []);

  return (
    <section className='py-[25px]'>
      <h3 className='font-[500]'>
        <button
          className='hover:text-red'
          onClick={() => {
            authorNickname && setSearchQuery(authorNickname);
            router.push('/posts');
          }}
        >
          Недавние публикации
        </button>
      </h3>
      <div
        style={{
          gridTemplateColumns: `repeat(${postsGrid.columns}, 1fr)`,
          gridTemplateRows: `repeat(${postsGrid.rows}, auto)`,
        }}
        className={`grid ${
          direction === 'vertical' ? 'grid-flow-col' : 'grid-flow-row'
        } gap-x-[10px] gap-y-[20px] py-[10px]`}
      >
        {/* {queryStatus === 'loading' && } */}
        {queryStatus === 'success' &&
          posts?.posts.map((post) => <PostCard key={post._id} post={post} />)}
      </div>
      <Link className='hover:text-red' href='/posts'>
        Другие публикации...
      </Link>
    </section>
  );
}

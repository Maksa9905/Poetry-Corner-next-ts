'use client';
import { useGridInitialization } from '@/hooks/useGridInitialization';
import Link from 'next/link';
import { recentNewsGrid } from '../model/gridConfig';
import RecentNewsItem from './RecentNewsItem';
import { INewResponse } from '@/entities/news';
import { useEffect, useState } from 'react';
import { QueryStatusType } from '@/entities/query/types';
import RecentNewsItemSkeleton from '@/shared/RecentNews/ui/RecentNewsItemSkeleton';

async function getNews(): Promise<INewResponse[]> {
  const news = await fetch('http://localhost:3000/api/news');
  return await news.json();
}

export default function RecentNews() {
  const newsGrid = useGridInitialization(recentNewsGrid);

  const [news, setNews] = useState<INewResponse[]>();
  const [queryStatus, setQueryStatus] = useState<QueryStatusType>('idle');

  useEffect(() => {
    setQueryStatus('loading');
    getNews().then((res) => {
      setNews(res);
      setQueryStatus('success');
    });
  }, []);

  return (
    <section className='py-[25px]'>
      <h3 className='font-[500]'>
        <Link href='/news' className='hover:text-red'>
          Новости
        </Link>
      </h3>
      <div
        style={{
          gridTemplateColumns: `repeat(${newsGrid.columns}, 1fr)`,
          gridTemplateRows: `repeat(${newsGrid.rows}, auto)`,
        }}
        className={`grid grid-flow-col gap-x-[10px] gap-y-[20px] py-[10px]`}
      >
        {queryStatus === 'loading' &&
          [...Array(newsGrid.columns * newsGrid.rows)].map((_, index) => {
            return <RecentNewsItemSkeleton key={index}></RecentNewsItemSkeleton>;
          })}
        {queryStatus === 'success' &&
          news &&
          [...news].map((post, index) => {
            if (index < newsGrid.columns * newsGrid.rows) {
              return (
                <RecentNewsItem key={post._id} post={post}></RecentNewsItem>
              );
            }
          })}
      </div>
      <Link className='hover:text-red' href='/news'>
        Другие новости...
      </Link>
    </section>
  );
}

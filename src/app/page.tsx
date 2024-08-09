'use client';
import Image from 'next/image';
import VideoSection from '../shared/VideoSection/ui/VideoSection';
import RecentPosts from '../shared/RecentPosts/ui/RecentPosts';

const RecentPostsGrid = {
  default: {
    columns: 3,
    rows: 2,
  },
  screen640: {
    columns: 1,
    rows: 2,
  },
  screen768: {
    columns: 2,
    rows: 1,
  },
  screen1024: {
    columns: 2,
    rows: 2,
  },
  screen1440: {
    columns: 3,
    rows: 2,
  },
  screen1920: {
    columns: 3,
    rows: 2,
  },
};

export default function Home() {
  return (
    <main className='container py-[15px] px-[10px]'>
      <h2 className='py-[10px]'>Добро пожаловать в уголок поэзии!</h2>
      <p className='py-[10px]'>
        Приветствуем всех неравнодушных к искусству. В нашем уголке вы сможете
        найти работы начинающих поэтов, которые пока не успели прославить свое
        имя на весь мир, однако кто знает, может быть спустя пару лет мы увидим
        ранее прочтенные здесь творения на страницах лучших поэтических
        сборников.
      </p>
      <p className='py-[10px]'>
        Мы всегда рады нашим новым читателям, но в особенности мы рады новым
        поэтам. Если вы хотите поделиться своим творчество, наша группа
        модераторов с радостью поможет вам. Мы считаем, что никакое творчество
        не должно подвергаться цензуре. В нашем уголке вы сможете
        безпрепятственно делиться своими мыслями в поэтической форме. Даешь{' '}
        <span className='text-red font-[500]'>свободу искусству!</span>
      </p>
      {/* <News news={news}></News> */}
      <VideoSection src='https://www.youtube.com/embed/yYjoTbayfpw?si=ZGBoME8qsuPX7bwN' />
      {/* <AdsWidget ads={ads}></AdsWidget> */}
      <RecentPosts
        direction='vertical'
        recentPostsGrid={RecentPostsGrid}
      ></RecentPosts>
    </main>
  );
}

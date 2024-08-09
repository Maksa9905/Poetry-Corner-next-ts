'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Navigation } from './Navigation';
import Title from './Title';
import SearchInput from './SearchInput';

export function Header() {
  const [isNavigationOpened, setIsNavigationOpened] = useState(false);

  const navigationLinks = [
    {
      href: '/',
      text: 'Главная',
    },
    {
      href: '/posts',
      text: 'Популярное',
    },
    {
      href: '#',
      text: 'Поиск',
    },
    {
      href: '#',
      text: 'Контакты',
    },
    {
      href: '#',
      text: 'Вход для модераторов',
    },
  ];

  return (
    <>
      <div className='container sticky p-[10px] grid grid-cols-[auto_1fr_auto] place-items-center'>
        <Title
          text='Poetry Corner'
          href='/'
          icon={{
            url: 'https://svgshare.com/i/18nH.svg',
            alt: 'Poetry Corner',
            width: 30,
            height: 30,
            side: 'left',
          }}
        />
        <Navigation
          isNavigationOpened={isNavigationOpened}
          links={navigationLinks}
          setIsNavigationOpened={setIsNavigationOpened}
        />
        <SearchInput />
      </div>
    </>
  );
}

import Link from 'next/link';
import { ILink } from '../model/types';
import { Dispatch } from 'react';

export function Navigation({
  links,
  isNavigationOpened,
  setIsNavigationOpened,
}: {
  links: ILink[];
  isNavigationOpened: boolean;
  setIsNavigationOpened: Dispatch<(prev: boolean) => boolean>;
}) {
  return (
    <>
      <nav className='justify-center text-monochrome_01 sm:flex hidden gap-x-[30px] gap-y-[10px] flex-wrap'>
        {links.map((link) => (
          <Link key={link.text} className='hover:text-red' href={link.href}>
            {link.text}
          </Link>
        ))}
      </nav>
      <div className='sm:hidden col-start-3 col-end-3'>
        <button
          onClick={() =>
            setIsNavigationOpened(
              (prevIsNavigationOpened: boolean) => !prevIsNavigationOpened,
            )
          }
          className='bg-menu w-[30px] h-[30px]'
        ></button>
      </div>
      {isNavigationOpened && (
        <nav className='flex absolute w-[100%] gap-x-[20px] bg-neutral_03 gap-y-[10px] justify-between p-[10px] flex-wrap sm:hidden'>
          <a href='#'>Главная</a>
          <a href='#'>Популярное</a>
          <a href='#'>Поиск</a>
          <a href='#'>Контакты</a>
          <a href='#' className='text-monochrome_02'>
            Вход для модераторов
          </a>
        </nav>
      )}
    </>
  );
}

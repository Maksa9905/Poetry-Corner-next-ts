import { redirect, usePathname } from 'next/navigation';
import { useSearchQueryContext } from '@/contexts/SearchQueryContext';
import { useRef, useContext } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useSearchQueryContext();
  const path = usePathname();
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        if (path !== '/posts') {
          console.log('redirect');
          router.push('/posts');
        }
        setSearchQuery(searchInputRef.current?.value || '');
        if (searchInputRef.current) searchInputRef.current.value = '';
      }}
      className='flex gap-x-[15px] sm:col-[3] col-[2] row-[1]'
    >
      <div className='flex border-b-[1px]'>
        <input
          className='px-[10px] pt-[6px] pb-[2px] rounded-[5px] focus:outline-none placeholder:text-monochrome_02 bg-transparent'
          placeholder='Поиск...'
          type='text'
          ref={searchInputRef}
        />
        <button
          type='submit'
          className='w-[32px] aspect-square bg-right_arrow bg-contain'
        ></button>
      </div>
    </form>
  );
}

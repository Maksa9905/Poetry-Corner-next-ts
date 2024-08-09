import Link from 'next/link';
import { ITitle } from '../model/types';
import Image from 'next/image';

export default function Title({ text, href, icon }: ITitle) {
  if (href) {
    return (
      <Link href={href} className='flex items-center gap-[12px]'>
        <Image
          src={icon.url}
          alt={icon.alt}
          height={icon.height}
          width={icon.width}
        />
        <h1 className='font-[400] text-monochrome_01 text-[24px] lg:block hidden'>
          {text}
        </h1>
      </Link>
    );
  }

  return (
    <div className='flex items-center gap-[12px]'>
      <Image
        src={icon.url}
        alt={icon.alt}
        height={icon.height}
        width={icon.width}
      />
      <h1 className='font-[400] text-monochrome_01 text-[24px] lg:block hidden'>
        {text}
      </h1>
    </div>
  );
}

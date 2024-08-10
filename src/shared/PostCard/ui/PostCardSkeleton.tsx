import { Rating, Skeleton } from '@mui/material';

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function PostCardSkeleton({
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...restProps}>
      <Skeleton variant='text' sx={{ fontSize: '36px' }} width='90%' />
      <Skeleton
        variant='text'
        sx={{ fontSize: '16px' }}
        width={`${getRandomArbitrary(60, 80)}%`}
      />
      <Skeleton
        variant='text'
        sx={{ fontSize: '16px' }}
        width={`${getRandomArbitrary(60, 80)}%`}
      />
      <Skeleton
        variant='text'
        sx={{ fontSize: '16px' }}
        width={`${getRandomArbitrary(60, 80)}%`}
      />
      <Skeleton
        variant='text'
        sx={{ fontSize: '16px' }}
        width={`${getRandomArbitrary(60, 80)}%`}
      />
    </div>
  );
}

import { IPostResponse } from '@/entities/posts';
import { SortDirection, SortType } from './types';
import { IAuthorResponse } from '@/entities/authors';

export function sorting<
  TEntity extends IPostResponse | IAuthorResponse<IPostResponse>,
>(entities: TEntity[], sortType: SortType, sortDirection: SortDirection) {
  switch (sortType) {
    case 'rating':
      return entities.sort((a, b) => {
        switch (sortDirection) {
          case 'asc':
            return a.rating - b.rating;
          case 'desc':
            return b.rating - a.rating;
        }
      });
    case 'popular':
      return entities.sort((a, b) => {
        switch (sortDirection) {
          case 'asc':
            return a.views - b.views;
          case 'desc':
            return b.views - a.views;
        }
      });
    case 'newest':
      return entities.sort((a, b) => {
        switch (sortDirection) {
          case 'asc':
            return (
              new Date((a as IPostResponse).date).getTime() -
              new Date((b as IPostResponse).date).getTime()
            );
          case 'desc':
            return (
              new Date((b as IPostResponse).date).getTime() -
              new Date((a as IPostResponse).date).getTime()
            );
        }
      });
    case 'alphabetic':
      return entities.sort((a, b) => {
        switch (sortDirection) {
          case 'asc':
            return (a as IPostResponse).title.localeCompare(
              (b as IPostResponse).title,
            );
          case 'desc':
            return (b as IPostResponse).title.localeCompare(
              (a as IPostResponse).title,
            );
        }
      });
    default:
      return entities;
  }
}

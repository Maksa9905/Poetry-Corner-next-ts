'use client';
import { createContext, useContext, useState } from 'react';

export type ISearchQueryContext = [string, (query: string) => void];
export const SearchQueryContext = createContext<ISearchQueryContext>([
  '',
  () => {},
]);

export const useSearchQueryContext = () => useContext(SearchQueryContext);

export const SearchQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [query, setQuery] = useState('');

  return (
    <SearchQueryContext.Provider value={[query, setQuery]}>
      {children}
    </SearchQueryContext.Provider>
  );
};

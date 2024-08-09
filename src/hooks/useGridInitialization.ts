import { useMediaQuery } from 'react-responsive';

export interface IMediaQuery {
  default: IGrid;
  screen640: IGrid;
  screen768: IGrid;
  screen1024: IGrid;
  screen1440: IGrid;
  screen1920: IGrid;
}

export interface IGrid {
  columns: number;
  rows: number;
}

export function useGridInitialization(mediaQuery: IMediaQuery) {
  const grid = {
    columns: mediaQuery.default.columns,
    rows: mediaQuery.default.columns,
  };

  const screen640 = useMediaQuery({
    query: '(width <= 640px)',
  });
  const screen768 = useMediaQuery({
    query: '(640px < width <= 768px)',
  });
  const screen1024 = useMediaQuery({
    query: '(768px < width <= 1024px)',
  });
  const screen1440 = useMediaQuery({
    query: '(1024px < width <= 1440px)',
  });
  const screen1920 = useMediaQuery({
    query: '(width > 1440px)',
  });

  if (screen640) {
    return {
      columns: mediaQuery.screen640.columns,
      rows: mediaQuery.screen640.rows,
    };
  } else if (screen768) {
    return {
      columns: mediaQuery.screen768.columns,
      rows: mediaQuery.screen768.rows,
    };
  } else if (screen1024) {
    return {
      columns: mediaQuery.screen1024.columns,
      rows: mediaQuery.screen1024.rows,
    };
  } else if (screen1440) {
    return {
      columns: mediaQuery.screen1440.columns,
      rows: mediaQuery.screen1440.rows,
    };
  } else if (screen1920) {
    return {
      columns: mediaQuery.screen1920.columns,
      rows: mediaQuery.screen1920.rows,
    };
  }

  return grid;
}

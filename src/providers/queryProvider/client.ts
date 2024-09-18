import {QueryClient} from '@tanstack/react-query';

export const appQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // stale time 5min
      staleTime: 60 * 5 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

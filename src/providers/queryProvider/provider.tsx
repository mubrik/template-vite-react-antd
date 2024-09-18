import {QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {appQueryClient} from './client';

interface Props {
  children: React.ReactNode;
}

const ReactQueryProvider = ({children}: Props) => {
  return (
    <QueryClientProvider client={appQueryClient}>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition={'bottom-left'} />
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;

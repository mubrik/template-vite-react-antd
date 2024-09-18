import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// providers
import ReactQueryProvider from './providers/queryProvider/provider.tsx';
import AntDThemeProvider from './providers/themeProvider/provider.tsx';
import RootRouterProvider from './providers/routerProvider/provider.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AntDThemeProvider>
      <ReactQueryProvider>
        <RootRouterProvider />
      </ReactQueryProvider>
    </AntDThemeProvider>
  </StrictMode>,
);

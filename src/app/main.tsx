import { type JSX, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from '~/app/route.tsx';
import { ThemeProvider } from '@mui/material';
import { theme } from '~/app/theme.ts';

import './styles/main.css';

const rootElement = document.getElementById('root');

// eslint-disable-next-line react-refresh/only-export-components
const App = (): JSX.Element => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
};

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

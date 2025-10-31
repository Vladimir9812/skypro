import { type JSX, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from '~/app/route.tsx';

import './styles/main.css';

const rootElement = document.getElementById('root');

// eslint-disable-next-line react-refresh/only-export-components
const App = (): JSX.Element => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

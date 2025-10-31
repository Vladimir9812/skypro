import { type JSX, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');

// eslint-disable-next-line react-refresh/only-export-components
const App = (): JSX.Element => {
  return <div>Привет!</div>;
};

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';

import { createRoot } from 'react-dom/client';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundery';
import App from './app/App';
import 'shared/config/i18n/i18n';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Контейнер "root" не найден. НЕ удалось вмонтировать приложение');
}

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);

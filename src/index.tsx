import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Counter } from '../public/components/Counter';
import App from './App';
import { Theme } from './theme/ThemeContext';
import ThemeProvider from './theme/ThemeProvider';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

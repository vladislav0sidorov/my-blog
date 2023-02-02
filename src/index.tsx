import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Counter } from '../public/components/Counter';
import { App } from './App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './styles/index.scss';

import { Counter } from '../public/components/Counter';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { HomePageAsync } from './pages/HomePage/HomePage.async';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>СВИЧ ТЕМЫ</button>
      <Link to="/">Домой</Link>
      <Link to="about">О себе</Link>
      <Suspense fallback={<div>LOADING...</div>}>
        <Routes>
          <Route path="/" element={<HomePageAsync />}></Route>
          <Route path="about" element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
      <Counter />
    </div>
  );
};

export default App;

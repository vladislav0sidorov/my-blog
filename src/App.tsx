import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Counter } from '../public/components/Counter';

import './index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { HomePageAsync } from './pages/HomePage/HomePage.async';

export const App = () => {
  return (
    <div className="app">
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

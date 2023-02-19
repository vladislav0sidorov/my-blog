import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './styles/index.scss';

import { HomePage } from 'pages/HomePage';
import { AboutPage } from 'pages/AboutPage';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={ClassNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>СВИЧ ТЕМЫ</button>
      <Link to="/">Домой</Link>
      <Link to="about">О себе</Link>
      <Suspense fallback={<div>LOADING...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

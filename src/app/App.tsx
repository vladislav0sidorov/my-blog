import { Link } from 'react-router-dom';

import './styles/index.scss';

import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from 'app/providers/router';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={ClassNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>СВИЧ ТЕМЫ</button>
      <Link to="/">Домой</Link>
      <Link to="about">О себе</Link>
      <AppRouter />
    </div>
  );
};

export default App;

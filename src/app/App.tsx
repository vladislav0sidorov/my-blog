import './styles/index.scss';

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (

    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div>{t('Загрузка языка')}</div>}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;

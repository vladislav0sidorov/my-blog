import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/lodalStorage';
import { getUserInited, userActions } from '@/entities/User';

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  React.useEffect(() => {
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (user) {
      dispatch(userActions.initAuthData(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <React.Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </React.Suspense>
    </div>
  );
}

export default App;

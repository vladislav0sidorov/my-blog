import { FC, useMemo, useState } from 'react';

import { LOCAL_STORAGE_ITEM_KEY, Theme, ThemeContext } from './ThemeContext';

const defaulTheme = (localStorage.getItem(LOCAL_STORAGE_ITEM_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaulTheme);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

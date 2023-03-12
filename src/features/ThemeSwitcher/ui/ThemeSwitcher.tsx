import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/ClassNames/ClassNames';

import LightIcon from 'shared/assets/icons/white.svg';
import DarkIcon from 'shared/assets/icons/orange.svg';
import { Button, ButtonVariables } from 'shared/ui/Button';
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo((props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
  return (
    <Button theme={ButtonVariables.CLEAR_THIRD} onClick={toggleTheme} className={classNames('', {}, [className])}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});

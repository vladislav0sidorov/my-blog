import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/ClassNames/ClassNames';

import LightIcon from 'shared/assets/icons/white.svg';
import DarkIcon from 'shared/assets/icons/orange.svg';
import { Button, ThemeButton } from 'shared/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

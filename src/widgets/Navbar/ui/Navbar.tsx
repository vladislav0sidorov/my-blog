import { ClassNames } from 'shared/lib/classNames/classNames';
import { AppLink, ApplinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={ClassNames(cls.Navbar, {}, [className])}>
      <nav className={cls.links}>
        <AppLink theme={ApplinkTheme.SECONDARY} className={cls.firstLink} to="/">
          Домой
        </AppLink>
        <AppLink theme={ApplinkTheme.SECONDARY} to="about">
          О себе
        </AppLink>
      </nav>
    </div>
  );
};

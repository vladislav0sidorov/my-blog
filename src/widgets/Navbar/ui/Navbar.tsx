import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, ApplinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
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

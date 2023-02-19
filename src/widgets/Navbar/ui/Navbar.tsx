import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { AppLink, ApplinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <nav className={cls.links}>
        <AppLink theme={ApplinkTheme.SECONDARY} className={cls.firstLink} to="/">
          {t('Главная')}
        </AppLink>
        <AppLink theme={ApplinkTheme.SECONDARY} to="about">
          {t('О себе')}
        </AppLink>
      </nav>
    </div>
  );
};

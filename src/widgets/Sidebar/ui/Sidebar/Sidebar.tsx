import React from 'react';
import { useTranslation } from 'react-i18next';

import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { AppLink, ApplinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSizes, ButtonVariables } from 'shared/ui/Button/ui/Button';

import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = React.useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ButtonVariables.BACKGROUND_INVERTED}
        size={ButtonSizes.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <AppLink className={cls.item} theme={ApplinkTheme.SECONDARY} to={RoutePath.home}>
          <HomeIcon className={cls.icon} />
          <span className={cls.link}>
            {t('Главная')}
          </span>
        </AppLink>
        <AppLink theme={ApplinkTheme.SECONDARY} className={cls.item} to={RoutePath.about}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>
            {t('О себе')}
          </span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};

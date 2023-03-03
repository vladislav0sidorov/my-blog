import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';

import { classNames } from 'shared/lib/ClassNames/ClassNames';

import { Button, ButtonSizes, ButtonVariables } from 'shared/ui/Button/ui/Button';

import { SidebarItemsList } from '../../model/items';
import cls from './Sidebar.module.scss';
import { SidebarItem } from './SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = memo((props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = React.useState(false);
  const { t } = useTranslation();

  const itemList = useMemo(() => SidebarItemsList.map((item) => (
    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
  )), [collapsed]);

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
        {itemList}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
});

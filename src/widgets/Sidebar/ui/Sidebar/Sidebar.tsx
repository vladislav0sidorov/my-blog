import React from 'react';

import cls from './Sidebar.module.scss';

import { ClassNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = React.useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div className={ClassNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>Toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

import React, { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
// eslint-disable-next-line ylquiorra-plugin/path-checker
import { CardVariables } from '@/shared/ui/Card/ui/Card';
import { Card } from '../../Card';
import cls from './Tabs.module.scss';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs: FC<TabsProps> = React.memo((props) => {
  const {
    className, tabs, value, onTabClick,
  } = props;
  const { t } = useTranslation();

  const clickHandle = React.useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card onClick={clickHandle(tab)} theme={tab.value === value ? CardVariables.NORMAL : CardVariables.OUTLINED} key={tab.value} className={cls.tab}>
          {tab.content}
        </Card>
      ))}
    </div>
  );
});

import React, { HTMLAttributes, ReactNode } from 'react';

import cls from './Card.module.scss';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';

export enum CardVariables {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardVariables;
  max?: boolean;
}

export const Card = React.memo((props: CardProps) => {
  const {
    className, children, theme = CardVariables.NORMAL, max, ...otherProps
  } = props;

  return (
    <div className={classNames(cls.Card, { [cls.max]: max }, [className, cls[theme]])} {...otherProps}>
      {children}
    </div>
  );
});

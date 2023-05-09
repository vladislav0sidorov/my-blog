import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Card.module.scss';

export enum CardVariables {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardVariables;
}

export const Card = React.memo((props: CardProps) => {
  const {
    className, children, theme = CardVariables.NORMAL, ...otherProps
  } = props;

  return (
    <div className={classNames(cls.Card, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </div>
  );
});

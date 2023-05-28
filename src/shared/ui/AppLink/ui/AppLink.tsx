import { ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';

import cls from './AppLink.module.scss';

export enum ApplinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  THIRD = 'third',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: ApplinkTheme;
  children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to, className, children, theme = ApplinkTheme.PRIMARY, ...otherProps
  } = props;

  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  );
});
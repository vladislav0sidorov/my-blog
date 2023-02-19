import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/ClassNames/ClassNames';

import cls from './AppLink.module.scss';

export enum ApplinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: ApplinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const {
    to, className, children, theme = ApplinkTheme.PRIMARY, ...otherProps
  } = props;

  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};

import { Link, LinkProps } from 'react-router-dom';
import { ClassNames } from 'shared/lib/classNames/classNames';
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
  const { to, className, children, theme = ApplinkTheme.PRIMARY, ...otherProps } = props;

  return (
    <Link to={to} className={ClassNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};

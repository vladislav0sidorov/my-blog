import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Button.module.scss';

export enum ButtonVariables {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSizes {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonVariables;
  square?: boolean;
  size?: string
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className, square, size = ButtonSizes.M, children, theme, ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls[size]]: true,
  };

  return (
    <button type="button" className={classNames(cls.Button, mods, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  );
};

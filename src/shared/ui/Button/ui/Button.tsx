import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/ClassNames/ClassNames';
import cls from './Button.module.scss';

export enum ButtonVariables {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  CLEAR_THIRD = 'clearThird',
  OUTLINE = 'outline',
  OUTLINE_INVERTED = 'outlineInverted',
  OUTLINE_RED = 'outlineRed',
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
  size?: string;
  disabled?: boolean;
  children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className, square, size = ButtonSizes.M, children, disabled, theme = ButtonVariables.OUTLINE, ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };

  return (
    <button type="button" className={classNames(cls.Button, mods, [className, cls[theme]])} disabled={disabled} {...otherProps}>
      {children}
    </button>
  );
});

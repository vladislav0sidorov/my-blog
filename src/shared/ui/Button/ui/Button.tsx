import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Button.module.scss';

export enum ButtonVariables {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
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
  disabled?: boolean;

}

export const Button: React.FC<ButtonProps> = memo((props) => {
  const {
    className, square, size = ButtonSizes.M, children, disabled, theme, ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});

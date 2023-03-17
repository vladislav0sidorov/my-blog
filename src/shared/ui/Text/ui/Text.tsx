import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/ClassNames/ClassNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  PRIMARY_INVERTED = 'primaryInverted',
  SECONDORY = 'secondary',
  SECONDORY_INVERTED = 'secondaryInverted',
  ERROR = 'error',
}

export enum TextAling {
  RIGHT = 'right',
  CENTER = 'center',
  LEFT = 'left',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  aling?: TextAling;
  size?: TextSize;
}

export const Text: React.FC<TextProps> = memo((props) => {
  const {
    className, title, text, theme = TextTheme.PRIMARY, size = TextSize.M, aling = TextAling.LEFT,
  } = props;

  const mods: Mods = {
    [cls[size]]: true,
  };

  return (
    <div className={classNames(cls.Text, mods, [className, cls[theme], cls[aling]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

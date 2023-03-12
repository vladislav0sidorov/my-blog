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

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  aling?: TextAling;
}

export const Text: React.FC<TextProps> = memo((props) => {
  const {
    className, title, text, theme = TextTheme.PRIMARY, aling = TextAling.LEFT,
  } = props;

  const mods: Mods = {};

  return (
    <div className={classNames(cls.Text, mods, [className, cls[theme], cls[aling]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

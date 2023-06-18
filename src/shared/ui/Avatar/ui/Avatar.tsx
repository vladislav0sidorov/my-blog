import { useTranslation } from 'react-i18next';
import React from 'react';

import cls from './Avatar.module.scss';

import { classNames, Mods } from '@/shared/lib/ClassNames/ClassNames';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const {
    className,
    src,
    alt,
    size,
  } = props;
  const { t } = useTranslation();
  const mods: Mods = {};

  const styles = React.useMemo<React.CSSProperties>(() => ({
    height: size || 100,
    width: size || 100,
  }), [size]);

  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
};

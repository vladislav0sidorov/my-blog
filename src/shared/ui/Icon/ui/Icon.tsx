import React from 'react';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon: React.FC<IconProps> = React.memo((props) => {
  const { className, Svg } = props;

  return <Svg className={classNames(cls.Icon, {}, [className])} />;
});

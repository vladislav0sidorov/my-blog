import React from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon: React.FC<IconProps> = React.memo((props) => {
  const {
    className, Svg, inverted, ...otherProps
  } = props;

  return <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} {...otherProps} />;
});

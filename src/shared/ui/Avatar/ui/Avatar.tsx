import { useTranslation } from 'react-i18next'
import React from 'react'

import cls from './Avatar.module.scss'
import { Skeleton } from '../../Skeleton'
import { Icon } from '../../Icon'
import { AppImage } from '../../AppImage'

import UserImage from '@/shared/assets/icons/user.svg'
import { classNames, Mods } from '@/shared/lib/ClassNames/ClassNames'

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { className, src, alt, size = 100, ...otherProps } = props
  const { t } = useTranslation()
  const mods: Mods = {}

  const styles = React.useMemo<React.CSSProperties>(
    () => ({
      height: size,
      width: size,
    }),
    [size],
  )

  const fallback = <Skeleton width={size} height={size} border="50%" />
  const errorFallback = <Icon width={size} height={size} Svg={UserImage} />

  return (
    <AppImage
      {...otherProps}
      src={src}
      alt={alt}
      style={styles}
      fallback={fallback}
      errorFallback={errorFallback}
      className={classNames(cls.Avatar, mods, [className])}
    />
  )
}

import React from 'react'

import cls from './Skeleton.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'

export type BorderRadius = '12' | '40'

interface SkeletonProps {
  className?: string
  height?: number | string
  width?: number | string
  borderRadius?: BorderRadius
  border?: string
}

export const Skeleton: React.FC<SkeletonProps> = React.memo((props) => {
  const { className, height, width, border, borderRadius = '12' } = props
  const mapBorderRadiusToClass = {
    12: 'normalBorderRadius',
    40: 'roundBorderRadius',
  }

  const borderRadiusValue = mapBorderRadiusToClass[borderRadius]

  const styles: React.CSSProperties = {
    height,
    width,
    borderRadius: border,
  }

  return <div style={styles} className={classNames(cls.Skeleton, {}, [className, cls[borderRadiusValue]])} />
})

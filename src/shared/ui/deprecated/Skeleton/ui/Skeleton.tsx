import React from 'react'
import { useTranslation } from 'react-i18next'

import cls from './Skeleton.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'

interface SkeletonProps {
  className?: string
  height?: number | string
  width?: number | string
  border?: string
}

/**
 * Компонент устарел. Сейчас используем новые из папки redesigned
 * @deprecated
 */

export const Skeleton: React.FC<SkeletonProps> = React.memo((props) => {
  const { className, height, width, border } = props
  const { t } = useTranslation()

  const styles: React.CSSProperties = {
    height,
    width,
    borderRadius: border,
  }

  return <div style={styles} className={classNames(cls.Skeleton, {}, [className])} />
})

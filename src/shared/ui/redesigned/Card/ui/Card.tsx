import React, { HTMLAttributes, ReactNode } from 'react'

import cls from './Card.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'

export type CardVariant = 'normal' | 'outlined' | 'light'
export type CardPadding = '0' | '8' | '8_16' | '16' | '24'
export type CardBorderRadius = 'round' | 'normal'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  variant?: CardVariant
  max?: boolean
  padding?: CardPadding
  borderRadius?: CardBorderRadius
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
  '8_16': 'gap_8_16',
}

export const Card = React.memo((props: CardProps) => {
  const { className, children, variant = 'normal', max, padding = '8', borderRadius = 'normal', ...otherProps } = props

  const paddingClass = mapPaddingToClass[padding]

  return (
    <div
      className={classNames(cls.Card, { [cls.max]: max }, [
        className,
        cls[variant],
        cls[paddingClass],
        cls[borderRadius],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  )
})

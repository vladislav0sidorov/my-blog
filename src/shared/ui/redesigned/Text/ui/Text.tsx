import { memo } from 'react'

import cls from './Text.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'

export type TextVariant = 'primary' | 'accent' | 'error'

export type TextAlign = 'right' | 'center' | 'left'

export type TextSize = 's' | 'm' | 'l'

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToClass: Record<TextSize, string> = {
  s: cls.size_s,
  m: cls.size_m,
  l: cls.size_l,
}

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  variant?: TextVariant
  align?: TextAlign
  size?: TextSize
  bold?: boolean
  'data-testid'?: string
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    variant = 'primary',
    size = 'm',
    align = 'left',
    'data-testid': dataTestId = 'Text',
    bold,
  } = props

  const HeaderTag = mapSizeToHeaderTag[size]
  const sizeClass = mapSizeToClass[size]

  const additionalClasses = [className, cls[variant], cls[align], sizeClass]

  return (
    <div className={classNames(cls.Text, { [cls.bold]: bold }, additionalClasses)}>
      {title && (
        <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>
          {text}
        </p>
      )}
    </div>
  )
})

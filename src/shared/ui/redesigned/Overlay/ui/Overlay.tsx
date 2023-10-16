import React, { ReactNode } from 'react'

import cls from './Overlay.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'

type flexAlingParams = 'start' | 'center' | 'end'

interface OverlayProps {
  className?: string
  onClick?: () => void
  children?: ReactNode
  flexAling?: flexAlingParams
}

export const Overlay = React.memo((props: OverlayProps) => {
  const { className, onClick, children, flexAling = 'start' } = props

  const mapAlingClass: Record<flexAlingParams, string> = {
    start: cls.alingStart,
    center: cls.alingCenter,
    end: cls.alingEnd,
  }

  return (
    <div className={classNames(cls.Overlay, {}, [className, mapAlingClass[flexAling]])} onClick={onClick}>
      {children}
    </div>
  )
})

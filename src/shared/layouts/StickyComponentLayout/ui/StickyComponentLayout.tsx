import { ReactElement, memo } from 'react'

import cls from './StickyComponentLayout.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'

interface StickyComponentLayoutProps {
  className?: string
  left?: ReactElement
  right?: ReactElement
  content: ReactElement
}

export const StickyComponentLayout = memo((props: StickyComponentLayoutProps) => {
  const { className, left, right, content } = props

  return (
    <div className={classNames(cls.StickyComponentLayout, {}, [className])}>
      {left && <div className={cls.left}> {left}</div>}
      <div className={cls.content}>{content}</div>
      {right && <div className={cls.right}> {right}</div>}
    </div>
  )
})

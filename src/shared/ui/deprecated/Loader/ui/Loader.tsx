import { memo } from 'react'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import './Loader.scss'

interface LoaderProps {
  className?: string
}

/**
 * Компонент устарел. Сейчас используем новые из папки redesigned
 * @deprecated
 */

export const Loader: React.FC<LoaderProps> = memo((props) => {
  const { className } = props

  return (
    <div className={classNames('lds-ellipsis', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
})

import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
// import cls from './ScrollRestoration.module.scss';

interface ScrollRestorationProps {
  className?: string
}

export const ScrollRestoration: FC<ScrollRestorationProps> = React.memo((props) => {
  const { className } = props
  const { t } = useTranslation()

  return <div className={classNames('', {}, [className])} />
})

import React, { FC } from 'react'

import cls from './ScrollToolbar.module.scss'

import { ScrollToTopButton } from '@/features/ScrollToTopButton'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'

interface ScrollToolbarProps {
  className?: string
}

export const ScrollToolbar: FC<ScrollToolbarProps> = React.memo((props) => {
  const { className } = props

  return (
    <VStack className={classNames(cls.ScrollToolbar, {}, [])} max align="center" justify="center">
      <ScrollToTopButton />
    </VStack>
  )
})

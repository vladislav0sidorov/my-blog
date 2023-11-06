import React, { FC, useCallback } from 'react'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Icon } from '@/shared/ui/redesigned/Icon'
import CircleUpIcon from '@/shared/assets/icons/redesign/circle-up.svg'

interface ScrollToTopButtonProps {
  className?: string
}

export const ScrollToTopButton: FC<ScrollToTopButtonProps> = React.memo((props) => {
  const { className } = props

  const onClick = useCallback(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <Icon
      width={32}
      height={32}
      Svg={CircleUpIcon}
      onClick={onClick}
      clickable
      className={classNames('', {}, [className])}
    />
  )
})

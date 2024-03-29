import React, { MutableRefObject, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import cls from './Page.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ScrollRestorationActions, getScrollRestorationByPath } from '@/features/ScrollRestoration'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { StateSchema } from '@/app/providers/StoreProvider'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'
import { TestProps } from '@/shared/types/testTypes'
import { toggleFeatures } from '@/shared/lib/features'

interface PageProps extends TestProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = React.memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const triggerRef = React.useRef() as MutableRefObject<HTMLDivElement>
  const wrapperRef = React.useRef() as MutableRefObject<HTMLDivElement>
  const scrollPosition = useSelector((state: StateSchema) => getScrollRestorationByPath(state, pathname))

  useInfiniteScroll({
    triggerRef,
    wrapperRef: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => undefined,
      off: () => wrapperRef,
    }),
    callback: onScrollEnd,
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((event: React.UIEvent<HTMLDivElement>) => {
    dispatch(ScrollRestorationActions.setScrollPosition({ position: event.currentTarget.scrollTop, path: pathname }))
  }, 1000)

  const actualClassNameOfPage = toggleFeatures({
    name: 'isAppRedesigned',
    off: () => cls.pageWrapper,
    on: () => cls.pageWrapperRedesigned,
  })

  return (
    <main
      data-testid={props['data-testid'] ?? 'Page'}
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(actualClassNameOfPage, {}, [className])}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </main>
  )
})

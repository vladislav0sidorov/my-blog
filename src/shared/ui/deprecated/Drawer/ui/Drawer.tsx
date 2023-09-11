import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Portal } from '@headlessui/react'

import cls from './Drawer.module.scss'
import { Overlay } from '../../Overlay'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { useTheme } from '@/app/providers/ThemeProvider'
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider'

interface DrawerProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
  children?: ReactNode
  lazy?: boolean
}

const height = window.innerHeight - 100

/**
 * Компонент устарел. Сейчас используем новые из папки redesigned
 * @deprecated
 */

export const DrawerContent = React.memo((props: DrawerProps) => {
  const { className, isOpen, onClose, children, lazy } = props
  const { t } = useTranslation()
  const { theme } = useTheme()
  const { Spring, Gesture } = useAnimationLibs()
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

  const openDrawer = React.useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [api])

  React.useEffect(() => {
    if (isOpen) {
      openDrawer()
    }
  }, [api, isOpen, openDrawer])

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    })
  }

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
      if (my < -70) cancel()

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close()
        } else {
          openDrawer()
        }
      } else {
        api.start({ y: my, immediate: true })
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  )

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  if (!isOpen) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, {}, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close} flexAling="end" />
        <Spring.a.div
          className={cls.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  )
})

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs()

  if (!isLoaded) {
    return null
  }

  return <DrawerContent {...props} />
}

export const Drawer = (props: DrawerProps) => (
  <AnimationProvider>
    <DrawerAsync {...props} />
  </AnimationProvider>
)

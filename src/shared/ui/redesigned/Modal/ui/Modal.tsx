import React, { ReactNode } from 'react'

import { Portal } from '../../Portal'
import cls from './Modal.module.scss'
import { Overlay } from '../../Overlay'

import { useTheme } from '@/app/providers/ThemeProvider'
import { classNames, Mods } from '@/shared/lib/ClassNames/ClassNames'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { toggleFeatures } from '@/shared/lib/features'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 50

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props
  const { isClosing, isMounted, closeHandler } = useModal({
    onClose,
    isOpen,
    lazy,
    animationDelay: ANIMATION_DELAY,
  })
  const { theme } = useTheme()

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  const onContentClick: React.MouseEventHandler<HTMLDivElement> = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  if (lazy && !isMounted) {
    return null
  }

  const modalClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.modalNew,
    off: () => cls.modalOld,
  })

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme, modalClass])}>
        <Overlay flexAling="center" className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </Overlay>
      </div>
    </Portal>
  )
}

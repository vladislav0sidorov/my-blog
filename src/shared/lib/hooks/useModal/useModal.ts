import React, { MutableRefObject } from 'react'

interface UseModalProps {
  onClose?: () => void
  isOpen?: boolean
  lazy?: boolean
  animationDelay?: number
}

export function useModal({ onClose, isOpen, lazy, animationDelay }: UseModalProps) {
  const [isClosing, setIsClosing] = React.useState(false)
  const [isMounted, setIsMounted] = React.useState(false)
  const timerRef = React.useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  React.useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const closeHandler = React.useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
    }
  }, [animationDelay, onClose])

  const onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    },
    [closeHandler],
  )

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return {
    isClosing,
    isMounted,
    closeHandler,
  }
}

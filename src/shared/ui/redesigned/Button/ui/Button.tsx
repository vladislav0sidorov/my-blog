import { ButtonHTMLAttributes, ReactNode, memo } from 'react'

import cls from './Button.module.scss'

import { classNames, Mods } from '@/shared/lib/ClassNames/ClassNames'

export type ButtonVariant = 'clear' | 'outline'
export type ButtonSizes = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
  square?: boolean
  size?: string
  disabled?: boolean
  children: ReactNode
  fullWidth?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const { className, square, size = 'm', children, disabled, variant = 'clear', fullWidth, ...otherProps } = props

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  }

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
})

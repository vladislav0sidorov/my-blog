import { ButtonHTMLAttributes, ReactNode, memo } from 'react'

import cls from './Button.module.scss'

import { classNames, Mods } from '@/shared/lib/ClassNames/ClassNames'

export type ButtonVariant = 'clear' | 'outline' | 'filled' | 'red'
export type ButtonSizes = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
  square?: boolean
  size?: string
  disabled?: boolean
  children: ReactNode
  fullWidth?: boolean
  addonLeft?: ReactNode
  addonRight?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    square,
    size = 'm',
    children,
    disabled,
    variant = 'clear',
    fullWidth,
    addonLeft,
    addonRight,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
    [cls.addonLeft]: Boolean(addonLeft),
    [cls.addonRight]: Boolean(addonRight),
  }

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      {children}
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </button>
  )
})

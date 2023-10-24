import React, { ReactNode } from 'react'

import cls from './Input.module.scss'
import { HStack } from '../../Stack'
import { Text } from '../../Text'

import { classNames, Mods } from '@/shared/lib/ClassNames/ClassNames'

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'readOnly' | 'onChange'>

export type InputVariant = 'primary'

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  label?: string
  placeholder?: string
  autoFocus?: boolean
  type?: string
  readonly?: boolean
  variant?: InputVariant
  addonLeft?: ReactNode
  addonRight?: ReactNode
}

export const Input: React.FC<InputProps> = React.memo((props) => {
  const {
    className,
    value,
    onChange,
    variant = 'primary',
    type,
    label,
    placeholder,
    autoFocus,
    readonly,
    addonLeft,
    addonRight,
    ...otherProps
  } = props

  const [isFocused, setIsFocused] = React.useState(false)
  const ref = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (autoFocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autoFocus])

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  }

  const content = (
    <div className={classNames(cls.InputWrapper, mods, [className, cls[variant]])}>
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      <input
        ref={ref}
        className={cls.input}
        onBlur={onBlur}
        onFocus={onFocus}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        readOnly={readonly}
        {...otherProps}
      />
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </div>
  )

  if (label) {
    return (
      <HStack max align="center" gap="8">
        <Text text={`${label}:`} />
        {content}
      </HStack>
    )
  }

  return content
})

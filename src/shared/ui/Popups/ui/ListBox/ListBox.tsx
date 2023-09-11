import { ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'

import popupCls from '../../styles/Popups.module.scss'
import cls from './ListBox.module.scss'
import { mapDirectionClass } from '../../styles/const'
import { HStack } from '../../../Stack'
import { Button, ButtonVariables } from '../../../deprecated/Button'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { DropdownDirection } from '@/shared/types/ui'

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  items: ListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  onChange: (value: string) => void
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
}

export const ListBox = (props: ListBoxProps) => {
  const { items, className, value, defaultValue, onChange, readonly, direction = 'bottom right', label } = props

  const optionClasses = [mapDirectionClass[direction]]

  return (
    <HStack gap="8">
      {label && <span className={cls.label}>{`${label} >`}</span>}
      <HListBox
        disabled={readonly}
        className={classNames(cls.ListBox, {}, [className, popupCls.Popups])}
        as="div"
        value={value}
        onChange={onChange}
      >
        <HListBox.Button as="div" className={cls.trigger}>
          <Button disabled={readonly} theme={ButtonVariables.OUTLINE}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionClasses)}>
          {items?.map((item) => (
            <HListBox.Option key={item.value} value={item.value} disabled={item.disabled}>
              {({ active, selected }) => (
                <div
                  className={classNames(cls.item, { [popupCls.active]: active, [popupCls.disabled]: item.disabled })}
                >
                  {item.content}
                </div>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}

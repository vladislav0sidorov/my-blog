import { ReactNode, useMemo } from 'react'
import { Listbox as HListBox } from '@headlessui/react'

import popupCls from '../../styles/Popups.module.scss'
import cls from './ListBox.module.scss'
import { mapDirectionClass } from '../../styles/const'
import { HStack } from '../../../Stack'
import { Button } from '../../../Button'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { DropdownDirection } from '@/shared/types/ui'

export interface ListBoxItem<T extends string> {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps<T extends string> {
  items: ListBoxItem<T>[]
  className?: string
  value?: T
  defaultValue?: string
  onChange: (value: T) => void
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
  const { items, className, value, defaultValue, onChange, readonly, direction = 'bottom right', label } = props

  const optionClasses = [mapDirectionClass[direction], popupCls.menu]

  const selectedItem = useMemo(() => items.find((item) => item?.value === value), [items, value])

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
          <Button disabled={readonly} variant="filled">
            {selectedItem?.content ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionClasses)}>
          {items?.map((item) => (
            <HListBox.Option key={item.value} value={item.value} disabled={item.disabled}>
              {({ active }) => (
                <div className={classNames(cls.item, { [cls.active]: active, [popupCls.disabled]: item.disabled })}>
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

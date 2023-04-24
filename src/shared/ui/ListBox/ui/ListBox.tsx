import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';

import { classNames } from 'shared/lib/ClassNames/ClassNames';
// eslint-disable-next-line ylquiorra-plugin/path-checker
import { Button, ButtonVariables } from 'shared/ui/Button';
import { HStack } from 'shared/ui/Stack';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

interface ListBoxProps {
  items: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox(props: ListBoxProps) {
  const {
    items, className, value, defaultValue, onChange, readonly, direction = 'bottom', label,
  } = props;

  const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.bottomDirectionOptions,
    top: cls.topDirectionOptions,
  };

  const optionClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap="8">
      {label && <span className={cls.label}>{`${label} >`}</span>}
      <HListBox disabled={readonly} className={classNames(cls.ListBox, {}, [className])} as="div" value={value} onChange={onChange}>
        <HListBox.Button disabled={readonly} className={cls.trigger}>
          <Button disabled={readonly} theme={ButtonVariables.OUTLINE}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionClasses)}>
          {items?.map((item) => (
            <HListBox.Option key={item.value} value={item.value} disabled={item.disabled} as={Fragment}>
              {({ active, selected }) => <li className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled })}>{item.content}</li>}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}

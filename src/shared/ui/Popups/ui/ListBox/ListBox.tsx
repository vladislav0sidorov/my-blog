import { ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';
// eslint-disable-next-line ylquiorra-plugin/path-checker
import { Button, ButtonVariables } from '@/shared/ui/Button';
// eslint-disable-next-line ylquiorra-plugin/path-checker
import { HStack } from '@/shared/ui/Stack';
import { DropdownDirection } from '@/shared/types/ui';
import popupCls from '../../styles/Popups.module.scss';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/const';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

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

export const ListBox = (props: ListBoxProps) => {
  const {
    items, className, value, defaultValue, onChange, readonly, direction = 'bottom right', label,
  } = props;

  const optionClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap="8">
      {label && <span className={cls.label}>{`${label} >`}</span>}
      <HListBox disabled={readonly} className={classNames(cls.ListBox, {}, [className, popupCls.Popups])} as="div" value={value} onChange={onChange}>
        <HListBox.Button disabled={readonly} className={cls.trigger}>
          <Button disabled={readonly} theme={ButtonVariables.OUTLINE}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionClasses)}>
          {items?.map((item) => (
            <HListBox.Option key={item.value} value={item.value} disabled={item.disabled}>
              {({ active, selected }) => <li className={classNames(cls.item, { [popupCls.active]: active, [popupCls.disabled]: item.disabled })}>{item.content}</li>}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};
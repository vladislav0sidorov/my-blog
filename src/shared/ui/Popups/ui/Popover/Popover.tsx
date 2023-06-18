import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Popover as HPopover } from '@headlessui/react';

import cls from './Popover.module.scss';
import popupCls from '../../styles/Popups.module.scss';
import { mapDirectionClass } from '../../styles/const';

import { DropdownDirection } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';

interface PopoverProps {
  className?: string;
  children: ReactNode;
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export const Popover = (props: PopoverProps) => {
  const {
    className, trigger, direction = 'bottom right', children,
  } = props;
  const { t } = useTranslation();

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover className={classNames('', {}, [className, popupCls.Popups])}>
      <HPopover.Button as="div" className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>{children}</HPopover.Panel>
    </HPopover>
  );
};

import React, { FC, Fragment, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { DropdownDirection } from '@/shared/types/ui';

// eslint-disable-next-line ylquiorra-plugin/path-checker
import { AppLink } from '@/shared/ui/AppLink';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/Popups.module.scss';
import { mapDirectionClass } from '../../styles/const';

export interface DropdownItems {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItems[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export const Dropdown: FC<DropdownProps> = React.memo((props) => {
  const {
    className, items, trigger, direction = 'bottom right',
  } = props;
  const { t } = useTranslation();

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.Popups])}>
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button onClick={item.onClick} disabled={item.disabled} type="button" className={classNames(cls.item, { [popupCls.active]: active })}>
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});

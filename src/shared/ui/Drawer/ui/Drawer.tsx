import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/ClassNames/ClassNames';
// eslint-disable-next-line ylquiorra-plugin/path-checker
import { Portal } from 'shared/ui/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
// eslint-disable-next-line ylquiorra-plugin/path-checker
import { Overlay } from 'shared/ui/Overlay';
import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

export const Drawer = React.memo((props: DrawerProps) => {
  const {
    className, isOpen, onClose, children,
  } = props;
  const { t } = useTranslation();
  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={onClose} flexAling="end">
          <div className={cls.content}>{children}</div>
        </Overlay>
      </div>
    </Portal>
  );
});

import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button, ButtonVariables } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/Popups';
import Notification from '@/shared/assets/icons/notification.svg';
import { Drawer } from '@/shared/ui/Drawer';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = React.memo((props: NotificationButtonProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const onOpenDrawer = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonVariables.CLEAR}>
      <Icon Svg={Notification} />
    </Button>
  );

  return (
    <>
      <BrowserView>
        <Popover direction="bottom left" trigger={trigger}>
          <NotificationList className={cls.NotificationButton} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <AnimationProvider>
          <Drawer onClose={onCloseDrawer} isOpen={isOpen}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </>
  );
});

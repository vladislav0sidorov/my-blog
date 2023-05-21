import React from 'react';
import { Button, ButtonVariables } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import Notification from 'shared/assets/icons/notification.svg';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = React.memo((props: NotificationButtonProps) => {
  const { className } = props;

  return (
    <Popover
      direction="bottom left"
      trigger={(
        <Button theme={ButtonVariables.CLEAR}>
          <Icon Svg={Notification} />
        </Button>
      )}
    >
      <NotificationList className={cls.NotificationButton} />
    </Popover>
  );
});

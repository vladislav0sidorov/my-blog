import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton';
import { getNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = React.memo((props: NotificationListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { data: notifications, isLoading } = getNotifications(null, { pollingInterval: 5000 });

  if (isLoading) {
    return (
      <VStack gap="16" className={classNames(cls.notificationList, {}, [className])}>
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack gap="16" className={classNames(cls.notificationList, {}, [className])}>
      {notifications?.map((notification) => (
        <NotificationItem key={notification.id} item={notification} />
      ))}
    </VStack>
  );
});

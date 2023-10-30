import React from 'react'
import { useTranslation } from 'react-i18next'

import { getNotifications } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Skeleton as DeprecatedSkeleton } from '@/shared/ui/deprecated/Skeleton'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
// import cls from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string
}

export const NotificationList = React.memo((props: NotificationListProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { data: notifications, isLoading } = getNotifications(null, { pollingInterval: 5000 })

  if (isLoading) {
    return (
      <ToggleFeaturesComponent
        featureName="isAppRedesigned"
        on={
          <VStack gap="16" className={classNames('', {}, [className])}>
            <Skeleton width="100%" border="8px" height="80px" />
            <Skeleton width="100%" border="8px" height="80px" />
            <Skeleton width="100%" border="8px" height="80px" />
          </VStack>
        }
        off={
          <VStack gap="16" className={classNames('', {}, [className])}>
            <DeprecatedSkeleton width="100%" border="8px" height="80px" />
            <DeprecatedSkeleton width="100%" border="8px" height="80px" />
            <DeprecatedSkeleton width="100%" border="8px" height="80px" />
          </VStack>
        }
      />
    )
  }

  return (
    <VStack gap="16" className={classNames('', {}, [className])}>
      {notifications?.map((notification) => (
        <NotificationItem key={notification.id} item={notification} />
      ))}
    </VStack>
  )
})

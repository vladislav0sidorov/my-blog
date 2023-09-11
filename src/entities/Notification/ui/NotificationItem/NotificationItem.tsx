import React from 'react'
import { useTranslation } from 'react-i18next'

import { Notification } from '../../model/types/notification'
import cls from './NotificationItem.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Card } from '@/shared/ui/deprecated/Card'
import { CardVariables } from '@/shared/ui/deprecated/Card/ui/Card'
import { Text } from '@/shared/ui/deprecated/Text'

interface NotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem = React.memo((props: NotificationItemProps) => {
  const { className, item } = props
  const { t } = useTranslation()

  const content = (
    <Card theme={CardVariables.OUTLINED} className={classNames(cls.NotificationItem, {}, [className])}>
      <Text title={item.title} text={item.description} />
    </Card>
  )

  if (item.href) {
    return (
      <a className={cls.link} href={item.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }
  return content
})

import React from 'react'
import { useTranslation } from 'react-i18next'

import { Notification } from '../../model/types/notification'
import cls from './NotificationItem.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { CardVariables } from '@/shared/ui/deprecated/Card/ui/Card'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Card } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'

interface NotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem = React.memo((props: NotificationItemProps) => {
  const { className, item } = props
  const { t } = useTranslation()

  const contentDeprecated = (
    <CardDeprecated theme={CardVariables.OUTLINED} className={classNames(cls.NotificationItem, {}, [className])}>
      <TextDeprecated title={item.title} text={item.description} />
    </CardDeprecated>
  )

  const contentRedesigned = (
    <Card padding="8" variant="outlined" className={classNames(cls.NotificationItem, {}, [className])}>
      <Text title={item.title} text={item.description} />
    </Card>
  )

  const content = (
    <ToggleFeaturesComponent featureName="isAppRedesigned" on={contentRedesigned} off={contentDeprecated} />
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

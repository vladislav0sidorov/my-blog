import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'

import cls from './NotificationButton.module.scss'

import { NotificationList } from '@/entities/Notification'
import { Popover } from '@/shared/ui/redesigned/Popups'
import Notification from '@/shared/assets/icons/notification.svg'
import { Button, ButtonVariables } from '@/shared/ui/deprecated/Button'
import { Drawer } from '@/shared/ui/deprecated/Drawer'
import { Icon } from '@/shared/ui/deprecated/Icon'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = React.memo((props: NotificationButtonProps) => {
  const { className } = props
  const [isOpen, setIsOpen] = React.useState(false)

  const onOpenDrawer = React.useCallback(() => {
    setIsOpen(true)
  }, [])

  const onCloseDrawer = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonVariables.CLEAR}>
      <Icon Svg={Notification} />
    </Button>
  )

  return (
    <>
      <BrowserView>
        <Popover direction="bottom left" trigger={trigger}>
          <NotificationList className={cls.NotificationButton} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer onClose={onCloseDrawer} isOpen={isOpen}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  )
})

import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'

import cls from './NotificationButton.module.scss'

import { NotificationList } from '@/entities/Notification'
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups'
import NotificationDeprecated from '@/shared/assets/icons/notification.svg'
import Notification from '@/shared/assets/icons/redesign/norification.svg'
import { Button as ButtonDeprecated, ButtonVariables } from '@/shared/ui/deprecated/Button'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Popover } from '@/shared/ui/redesigned/Popups'

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

  const deprecatedTrigger = (
    <ButtonDeprecated onClick={onOpenDrawer} theme={ButtonVariables.CLEAR}>
      <IconDeprecated Svg={NotificationDeprecated} />
    </ButtonDeprecated>
  )

  const redesignedTrigger = <Icon clickable Svg={Notification} onClick={onOpenDrawer} />

  const trigger = (
    <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedTrigger} off={deprecatedTrigger} />
  )

  const deprecatedPopoverContent = (
    <PopoverDeprecated direction="bottom left" trigger={trigger}>
      <NotificationList className={cls.NotificationButton} />
    </PopoverDeprecated>
  )

  const redesignedPopoverContent = (
    <Popover direction="bottom left" trigger={trigger}>
      <NotificationList className={cls.NotificationButton} />
    </Popover>
  )

  const contentForBrowser = (
    <BrowserView>
      <ToggleFeaturesComponent
        featureName="isAppRedesigned"
        on={redesignedPopoverContent}
        off={deprecatedPopoverContent}
      />
    </BrowserView>
  )

  const contentForMobile = (
    <MobileView>
      {trigger}
      <Drawer onClose={onCloseDrawer} isOpen={isOpen}>
        <NotificationList />
      </Drawer>
    </MobileView>
  )

  return (
    <>
      {contentForBrowser}
      {contentForMobile}
    </>
  )
})

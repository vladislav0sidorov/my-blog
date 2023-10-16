import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User'
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router'
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Dropdown } from '@/shared/ui/redesigned/Popups'
import { Avatar } from '@/shared/ui/redesigned/Avatar'

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown: FC<AvatarDropdownProps> = React.memo((props) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const authData = useSelector(getUserAuthData)

  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const onLogout = React.useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const isAdminPanelAvalable = isAdmin || isManager

  if (!authData) {
    return null
  }

  const items = [
    ...(isAdminPanelAvalable
      ? [
          {
            content: t('Админ'),
            href: getRouteAdminPanel(),
          },
        ]
      : []),
    {
      content: t('Профиль'),
      href: getRouteProfile(authData.id),
    },
    {
      content: t('Выйти'),
      onClick: onLogout,
    },
  ]

  const deprecatedContent = (
    <DropdownDeprecated
      direction="bottom left"
      items={items}
      trigger={<AvatarDeprecated size={30} src={authData.avatar} />}
    />
  )

  const redesignedContent = (
    <Dropdown direction="bottom left" items={items} trigger={<Avatar size={40} src={authData.avatar} />} />
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
})

import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { SidebarItemType } from '../../../model/types/sidebar'
import cls from './SidebarItem.module.scss'

import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { AppLink as AppLinkDeprecated, ApplinkTheme } from '@/shared/ui/deprecated/AppLink'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed?: boolean
  text?: string
}

export const SidebarItem: React.FC<SidebarItemProps> = memo((props) => {
  const { item, text, collapsed } = props
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }

  const deprecatedContent = (
    <AppLinkDeprecated
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      theme={ApplinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLinkDeprecated>
  )

  const redesignedContent = (
    <AppLink
      className={classNames(cls.itemRedesigned, { [cls.collapsedRedesigned]: collapsed })}
      variant="primary"
      to={item.path}
      activeClassName={cls.active}
    >
      <Icon Svg={item.Icon} className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
})

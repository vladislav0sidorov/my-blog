import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { SidebarItemType } from '../../../model/types/sidebar'
import cls from './SidebarItem.module.scss'

import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { AppLink, ApplinkTheme } from '@/shared/ui/deprecated/AppLink'

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

  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      theme={ApplinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  )
})

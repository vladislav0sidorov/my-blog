import React, { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems'
import cls from './Sidebar.module.scss'
import { SidebarItem } from './SidebarItem/SidebarItem'

import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Button, ButtonSizes, ButtonVariables } from '@/shared/ui/Button/ui/Button'
import { VStack } from '@/shared/ui/Stack'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { AppLogo } from '@/shared/ui/AppLogo/ui/AppLogo'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = memo((props) => {
  const { className } = props
  const [collapsed, setCollapsed] = React.useState(false)
  const sidebarItemsList = useSelector(getSidebarItems)
  const { t } = useTranslation()

  const itemList = useMemo(
    () => sidebarItemsList.map((item) => <SidebarItem key={item.path} item={item} collapsed={collapsed} />),
    [collapsed, sidebarItemsList],
  )

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const deprecatedContent = (
    <aside data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ButtonVariables.BACKGROUND_INVERTED}
        size={ButtonSizes.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <VStack role="navigation" gap="16" className={cls.items}>
        {itemList}
      </VStack>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </aside>
  )

  const redesignedContent = (
    <aside
      data-testid="sidebar"
      className={classNames(cls.SidebarRedesigned, { [cls.collapsed]: collapsed }, [className])}
    >
      <AppLogo className={cls.appLogo} />
      {t('gsdggsdg')}
    </aside>
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
})

import React, { memo, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems'
import cls from './Sidebar.module.scss'
import { SidebarItem } from './SidebarItem/SidebarItem'

import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Button, ButtonVariables } from '@/shared/ui/deprecated/Button'
import { ButtonSizes } from '@/shared/ui/deprecated/Button/ui/Button'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { Icon } from '@/shared/ui/redesigned/Icon'
import ArrowIcon from '@/shared/assets/icons/redesign/arrow-to-down.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = memo((props) => {
  const { className } = props
  const [collapsed, setCollapsed] = React.useState(false)
  const sidebarItemsList = useSelector(getSidebarItems)

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
      className={classNames(cls.SidebarRedesigned, { [cls.collapsedRedesigned]: collapsed }, [className])}
    >
      <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
      <VStack role="navigation" gap="8" className={cls.items}>
        {itemList}
      </VStack>
      <Icon
        width={15}
        height={15}
        Svg={ArrowIcon}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapsedBtn}
        clickable
      />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </aside>
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
})

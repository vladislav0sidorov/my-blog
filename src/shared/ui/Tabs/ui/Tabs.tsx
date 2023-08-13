import React, { FC, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { Card } from '../../Card'
import cls from './Tabs.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
// eslint-disable-next-line ulbi-tv-plugin/path-checker
import { CardVariables } from '@/shared/ui/Card/ui/Card'

export interface TabItem {
  value: string
  content: ReactNode
  'data-testid'?: string
}

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
}

export const Tabs: FC<TabsProps> = React.memo((props) => {
  const { className, tabs, value, onTabClick } = props
  const { t } = useTranslation()

  const clickHandle = React.useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab)
    },
    [onTabClick],
  )

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          data-testid={tab['data-testid']}
          onClick={clickHandle(tab)}
          theme={tab.value === value ? CardVariables.NORMAL : CardVariables.OUTLINED}
          key={tab.value}
          className={cls.tab}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
})

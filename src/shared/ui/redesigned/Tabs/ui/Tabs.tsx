import React, { FC, ReactNode } from 'react'

import cls from './Tabs.module.scss'
import { Card } from '../../Card'
import { Flex, FlexDirection } from '../../Stack/Flex/Flex'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'

export interface TabItem {
  value: string
  content: ReactNode
  'data-testid'?: string
}

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  direction?: FlexDirection
  onTabClick: (tab: TabItem) => void
}

export const Tabs: FC<TabsProps> = React.memo((props) => {
  const { className, direction = 'row', tabs, value, onTabClick } = props

  const clickHandle = React.useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab)
    },
    [onTabClick],
  )

  return (
    <Flex align="start" direction={direction} gap="8" className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => {
        const isSelected = tab.value === value

        return (
          <Card
            // eslint-disable-next-line i18next/no-literal-string
            borderRadius="round"
            data-testid={tab['data-testid']}
            onClick={clickHandle(tab)}
            variant={isSelected ? 'light' : 'normal'}
            key={tab.value}
            padding="8_16"
            className={cls.tab}
          >
            {tab.content}
          </Card>
        )
      })}
    </Flex>
  )
})

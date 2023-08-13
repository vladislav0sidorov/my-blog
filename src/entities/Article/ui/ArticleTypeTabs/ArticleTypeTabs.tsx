import React, { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleType } from '../../model/consts/consts'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Tabs } from '@/shared/ui/Tabs'
import { TabItem } from '@/shared/ui/Tabs/ui/Tabs'

// import cls from './ArticleTypeTabs.module.scss';

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = React.memo((props) => {
  const { className, value, onChangeType } = props
  const { t } = useTranslation()

  const typeTabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleType.ALL, content: t('Все статьи'), 'data-testid': 'ArticlesPage.ArticlesTabs.All' },
      { value: ArticleType.IT, content: t('Айти'), 'data-testid': 'ArticlesPage.ArticlesTabs.It' },
      { value: ArticleType.SCIENCE, content: t('Наука'), 'data-testid': 'ArticlesPage.ArticlesTabs.Science' },
      { value: ArticleType.ECONOMICS, content: t('Экономика'), 'data-testid': 'ArticlesPage.ArticlesTabs.Economics' },
    ],
    [t],
  )

  const onTabClick = React.useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType)
    },
    [onChangeType],
  )

  return <Tabs tabs={typeTabs} value={value} onTabClick={onTabClick} className={classNames('', {}, [className])} />
})

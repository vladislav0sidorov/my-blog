import React, { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleType } from '../../model/consts/consts'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs/ui/Tabs'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Tabs } from '@/shared/ui/redesigned/Tabs'

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

  const deprecatedContent = (
    <TabsDeprecated tabs={typeTabs} value={value} onTabClick={onTabClick} className={classNames('', {}, [className])} />
  )

  const redesignedContent = (
    <Tabs
      tabs={typeTabs}
      value={value}
      direction="column"
      onTabClick={onTabClick}
      className={classNames('', {}, [className])}
    />
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
})

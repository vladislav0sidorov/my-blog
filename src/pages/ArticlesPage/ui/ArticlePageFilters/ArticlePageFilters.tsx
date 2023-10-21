import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticlePageFilters.module.scss'
import { useArticleFilteres } from '../../lib/hooks/useArticleFilteres'

import { ArticleTypeTabs } from '@/entities/Article'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { ArticleSortSelector, ArticleViewSelector } from '@/features/Article'
import { Card } from '@/shared/ui/deprecated/Card'
import { Input } from '@/shared/ui/deprecated/Input'

interface ArticlePageFiltersProps {
  className?: string
}

export const ArticlePageFilters: FC<ArticlePageFiltersProps> = React.memo((props) => {
  const { className } = props
  const { t } = useTranslation('article-list')
  const { sort, order, view, search, type, onChangeView, onChangeSearch, onChangeOrder, onChangeSort, onChangeType } =
    useArticleFilteres()

  return (
    <div className={classNames(cls.articlePageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector sort={sort} order={order} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input
          data-testid="ArticlesPage.ArticlesSearchInput"
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Поиск')}
        />
      </Card>
      <ArticleTypeTabs className={cls.tabs} value={type} onChangeType={onChangeType} />
    </div>
  )
})

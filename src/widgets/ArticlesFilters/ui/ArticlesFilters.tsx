import { useTranslation } from 'react-i18next'
import React, { FC } from 'react'

import cls from './ArticlesFilters.module.scss'

import { Card } from '@/shared/ui/redesigned/Card'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { SortOrder } from '@/shared/types/sort'
import { ArticleSortField, ArticleType, ArticleTypeTabs } from '@/entities/Article'
import { Input } from '@/shared/ui/redesigned/Input'
import { ArticleSortSelector } from '@/features/Article'
import SearchIcon from '@/shared/assets/icons/redesign/find.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface ArticlesFiltersProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  search: string
  type: ArticleType
  onChangeSort: (newSort: ArticleSortField) => void
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSearch: (search: string) => void
  onChangeType: (type: ArticleType) => void
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = React.memo((props) => {
  const { className, sort, order, search, type, onChangeSort, onChangeOrder, onChangeSearch, onChangeType } = props
  const { t } = useTranslation('article-list')

  return (
    <Card padding="24" className={classNames(cls.ArticlesFilters, {}, [className])}>
      <VStack gap="32">
        <Input
          data-testid="ArticlesPage.ArticlesSearchInput"
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Найти')}
          addonLeft={<Icon height={15} width={15} Svg={SearchIcon} />}
        />
        <ArticleTypeTabs value={type} onChangeType={onChangeType} />
        <ArticleSortSelector sort={sort} order={order} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} />
      </VStack>
    </Card>
  )
})

import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleSortSelector.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { SortOrder } from '@/shared/types/sort'
import { ArticleSortField } from '@/entities/Article'
import { Select, SelectOption } from '@/shared/ui/deprecated/Select/ui/Select'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeSort: (newSort: ArticleSortField) => void
  onChangeOrder: (newOrder: SortOrder) => void
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = React.memo((props) => {
  const { className, sort, order, onChangeSort, onChangeOrder } = props
  const { t } = useTranslation('article-list')

  const sortFieldOptions = React.useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('созданию'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('названию'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам'),
      },
    ],
    [t],
  )

  const orderOptions = React.useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию'),
      },
      {
        value: 'desc',
        content: t('убыванию'),
      },
    ],
    [t],
  )

  const deprecatedContent = (
    <div className={classNames(cls.ArticleSortSelectorDeprecated, {}, [className])}>
      <Select value={sort} onChange={onChangeSort} label={t('Сортировать по')} options={sortFieldOptions} />
      <Select className={cls.order} value={order} onChange={onChangeOrder} label={t('по')}
options={orderOptions} />
    </div>
  )

  const redesignedContenr = (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <VStack gap="8">
        <Text text={t('Сортировать по:')} />
        <ListBox value={sort} onChange={onChangeSort} items={sortFieldOptions} />
        <ListBox value={order} onChange={onChangeOrder} items={orderOptions} />
      </VStack>
    </div>
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContenr} off={deprecatedContent} />
})

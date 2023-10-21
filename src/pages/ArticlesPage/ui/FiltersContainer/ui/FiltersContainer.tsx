import React, { FC } from 'react'

import { useArticleFilteres } from '../../../lib/hooks/useArticleFilteres'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { ArticlesFilters } from '@/widgets/ArticlesFilters'

interface FiltersContainerProps {
  className?: string
}

export const FiltersContainer: FC<FiltersContainerProps> = React.memo((props) => {
  const { className } = props
  const { sort, order, search, type, onChangeSearch, onChangeOrder, onChangeSort, onChangeType } = useArticleFilteres()

  return (
    <ArticlesFilters
      sort={sort}
      onChangeOrder={onChangeOrder}
      onChangeSearch={onChangeSearch}
      onChangeSort={onChangeSort}
      onChangeType={onChangeType}
      order={order}
      search={search}
      type={type}
      className={classNames('', {}, [className])}
    />
  )
})

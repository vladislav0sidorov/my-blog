import React, { FC } from 'react'

import { useArticleFilteres } from '../../../lib/hooks/useArticleFilteres'

import { ArticleViewSelector } from '@/features/Article'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'

interface ViewSelectorContainerProps {
  className?: string
}

export const ViewSelectorContainer: FC<ViewSelectorContainerProps> = React.memo((props) => {
  const { className } = props
  const { view, onChangeView } = useArticleFilteres()

  return <ArticleViewSelector className={classNames('', {}, [className])} view={view} onViewClick={onChangeView} />
})

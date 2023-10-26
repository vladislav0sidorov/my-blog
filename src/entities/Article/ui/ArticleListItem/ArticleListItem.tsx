import React, { FC, HTMLAttributeAnchorTarget } from 'react'

import { ArticleView } from '../../model/consts/consts'
import { Article } from '../../model/types/article'
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated'
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned'

import { ToggleFeaturesComponent } from '@/shared/lib/features'

export interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<ArticleListItemProps> = React.memo((props) => (
  <ToggleFeaturesComponent
    featureName="isAppRedesigned"
    on={<ArticleListItemRedesigned {...props} />}
    off={<ArticleListItemDeprecated {...props} />}
  />
))

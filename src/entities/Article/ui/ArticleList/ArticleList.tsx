import React, { FC, HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleView } from '../../model/consts/consts'
import { Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import cls from './ArticleList.module.scss'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

import { TextSize } from '@/shared/ui/Text/ui/Text'
import { Text } from '@/shared/ui/Text'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleList: FC<ArticleListProps> = React.memo((props) => {
  const { className, articles, isLoading, target, view = ArticleView.PLATE } = props
  const { t } = useTranslation()

  const getSkeleton = (view: ArticleView) =>
    new Array(view === ArticleView.PLATE ? 9 : 3)
      .fill(0)
      .map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />)

  const renderArtcile = (article: Article) => (
    <ArticleListItem target={target} className={cls.card} key={article.id} article={article}
view={view} />
  )

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    )
  }

  return (
    <div data-testid="ArticleList" className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArtcile) : null}
      {isLoading && getSkeleton(view)}
    </div>
  )
})

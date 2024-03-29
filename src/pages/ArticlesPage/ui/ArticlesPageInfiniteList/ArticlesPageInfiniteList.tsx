import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { getArticlesPageError } from '../../model/selectors/getArticlesPageError/getArticlesPageError'
import { getArticles } from '../../model/slice/articlePageSlice'
import { getArticlesPageLoading } from '../../model/selectors/getArticlesPageLoading/getArticlesPageLoading'
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView'
// import cls from './ArticlesPageInfiniteList.module.scss';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'

import { Page } from '@/widgets/Page'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { ArticleList } from '@/entities/Article'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Text } from '@/shared/ui/deprecated/Text'

interface ArticlesPageInfiniteListProps {
  className?: string
}

export const ArticlesPageInfiniteList: FC<ArticlesPageInfiniteListProps> = React.memo((props) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageLoading)
  const view = useSelector(getArticlesPageView)
  const error = useSelector(getArticlesPageError)

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  if (error) {
    return (
      <Page>
        <Text title={t('Произошла ошибка при загрезке статей')} />
      </Page>
    )
  }

  return (
    <ArticleList className={classNames('', {}, [className])} articles={articles} isLoading={isLoading} view={view} />
  )
})

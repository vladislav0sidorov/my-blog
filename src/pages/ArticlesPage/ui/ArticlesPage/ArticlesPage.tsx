import { useTranslation } from 'react-i18next'
import React from 'react'

import { articlePageReducer } from '../../model/slice/articlePageSlice'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters'
import cls from './ArticlesPage.module.scss'
import { ArticlesPageInfiniteList } from '../ArticlesPageInfiniteList/ArticlesPageInfiniteList'

import { Page } from '@/widgets/Page'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ReducersList, DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ArticlePageGetting } from '@/features/articlePageGetting'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const onLoadNextPart = React.useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  const reducers: ReducersList = {
    articlesPage: articlePageReducer,
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page data-testid="ArticlesPage" onScrollEnd={onLoadNextPart}>
        <ArticlePageFilters />
        <ArticlesPageInfiniteList className={cls.list} />
        <ArticlePageGetting />
      </Page>
    </DynamicModuleLoader>
  )
}

export default ArticlesPage

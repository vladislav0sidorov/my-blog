import { useTranslation } from 'react-i18next'
import React from 'react'

import { articlePageReducer } from '../../model/slice/articlePageSlice'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters'
import cls from './ArticlesPage.module.scss'
import { ArticlesPageInfiniteList } from '../ArticlesPageInfiniteList/ArticlesPageInfiniteList'
import { ViewSelectorContainer } from '../ViewSelectorContainer'
import { FiltersContainer } from '../FiltersContainer'

import { Page } from '@/widgets/Page'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ReducersList, DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ArticlePageGetting } from '@/features/articlePageGetting'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { StickyComponentLayout } from '@/shared/layouts/StickyComponentLayout'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'

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

  const deprecatedContent = (
    <Page className={classNames(cls.ArticlesPage, {}, [])} data-testid="ArticlesPage" onScrollEnd={onLoadNextPart}>
      <ArticlePageFilters />
      <ArticlesPageInfiniteList className={cls.list} />
      <ArticlePageGetting />
    </Page>
  )

  const redesignedContent = (
    <StickyComponentLayout
      content={
        <Page data-testid="ArticlesPage" onScrollEnd={onLoadNextPart}>
          <ArticlesPageInfiniteList />
          <ArticlePageGetting />
        </Page>
      }
      left={<ViewSelectorContainer />}
      right={<FiltersContainer />}
    />
  )

  const contentComponent = (
    <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
  )

  return <DynamicModuleLoader reducers={reducers}>{contentComponent}</DynamicModuleLoader>
}

export default ArticlesPage

import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort/getArticlesPageSort'
import { getArticlesPageOrder } from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder'
import { getArticlesPageSearch } from '../../model/selectors/getArticlesPageSearch/getArticlesPageSearch'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { getArticlesPageType } from '../../model/selectors/getArticlesPageType/getArticlesPageType'
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView'
import { articlePageActions } from '../../model/slice/articlePageSlice'
import cls from './ArticlePageFilters.module.scss'

import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { SortOrder } from '@/shared/types/sort'
import { ArticleSortField, ArticleType, ArticleTypeTabs, ArticleView } from '@/entities/Article'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { ArticleSortSelector, ArticleViewSelector } from '@/features/Article'
import { Card } from '@/shared/ui/deprecated/Card'
import { Input } from '@/shared/ui/deprecated/Input'

interface ArticlePageFiltersProps {
  className?: string
}

export const ArticlePageFilters: FC<ArticlePageFiltersProps> = React.memo((props) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation('article-list')
  const view = useSelector(getArticlesPageView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)

  const fetchData = React.useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeView = React.useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view))
    },
    [dispatch],
  )

  const onChangeSort = React.useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlePageActions.setSort(newSort))
      dispatch(articlePageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

  const onChangeOrder = React.useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlePageActions.setOrder(newOrder))
      dispatch(articlePageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

  const onChangeSearch = React.useCallback(
    (search: string) => {
      dispatch(articlePageActions.setSearch(search))
      dispatch(articlePageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData],
  )

  const onChangeType = React.useCallback(
    (value: ArticleType) => {
      dispatch(articlePageActions.setType(value))
      dispatch(articlePageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

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

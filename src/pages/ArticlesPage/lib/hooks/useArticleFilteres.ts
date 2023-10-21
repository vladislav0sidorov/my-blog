import { useSelector } from 'react-redux'
import { useCallback } from 'react'

import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { getArticlesPageOrder } from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder'
import { getArticlesPageSearch } from '../../model/selectors/getArticlesPageSearch/getArticlesPageSearch'
import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort/getArticlesPageSort'
import { getArticlesPageType } from '../../model/selectors/getArticlesPageType/getArticlesPageType'
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView'
import { articlePageActions } from '../../model/slice/articlePageSlice'

import { SortOrder } from '@/shared/types/sort'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { ArticleView, ArticleSortField, ArticleType } from '@/entities/Article'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

export const useArticleFilteres = () => {
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view))
    },
    [dispatch],
  )

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlePageActions.setSort(newSort))
      dispatch(articlePageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlePageActions.setOrder(newOrder))
      dispatch(articlePageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlePageActions.setSearch(search))
      dispatch(articlePageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData],
  )

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlePageActions.setType(value))
      dispatch(articlePageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

  return {
    view,
    sort,
    order,
    search,
    type,
    onChangeView,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeType,
  }
}

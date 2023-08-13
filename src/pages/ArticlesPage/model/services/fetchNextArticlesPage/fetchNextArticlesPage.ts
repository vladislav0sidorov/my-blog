import { createAsyncThunk } from '@reduxjs/toolkit'

import { getArticlesPageHasMore } from '../../selectors/getArticlesPageHasMore/getArticlesPageHasMore'
import { getArticlesPageLoading } from '../../selectors/getArticlesPageLoading/getArticlesPageLoading'
import { getArticlesPageNumber } from '../../selectors/getArticlesPageNumber/getArticlesPageNumber'
import { articlePageActions } from '../../slice/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

import { ThunkConfig } from '@/app/providers/StoreProvider'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<void>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkApi
    const hasMore = getArticlesPageHasMore(getState())
    const isLoading = getArticlesPageLoading(getState())
    const page = getArticlesPageNumber(getState())

    if (hasMore && !isLoading) {
      dispatch(articlePageActions.setPage(page + 1))
      dispatch(fetchArticlesList({}))
    }
  },
)

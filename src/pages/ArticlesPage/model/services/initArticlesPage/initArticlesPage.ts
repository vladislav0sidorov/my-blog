import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types/sort';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/getArticlesPageInited/getArticlesPageInited';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<void>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const {
      extra, rejectWithValue, getState, dispatch,
    } = thunkApi;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      const orderFormUrl = searchParams.get('order') as SortOrder;
      const sortFormUrl = searchParams.get('sort') as ArticleSortField;
      const searchFormUrl = searchParams.get('search');

      if (orderFormUrl) {
        dispatch(articlePageActions.setOrder(orderFormUrl));
      }
      if (sortFormUrl) {
        dispatch(articlePageActions.setSort(sortFormUrl));
      }
      if (searchFormUrl) {
        dispatch(articlePageActions.setSearch(searchFormUrl));
      }

      dispatch(articlePageActions.initialState());
      dispatch(fetchArticlesList({}));
    }
  },
);

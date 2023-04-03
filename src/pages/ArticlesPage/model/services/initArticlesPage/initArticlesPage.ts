import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/getArticlesPageInited/getArticlesPageInited';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<void>>('articlesPage/initArticlesPage', async (_, thunkApi) => {
  const {
    extra, rejectWithValue, getState, dispatch,
  } = thunkApi;
  const inited = getArticlesPageInited(getState());

  if (!inited) {
    dispatch(articlePageActions.initialState());
    dispatch(fetchArticlesList({ page: 1 }));
  }
});

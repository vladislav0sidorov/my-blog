import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'artcileDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const {
      dispatch, extra, rejectWithValue, getState,
    } = thunkAPI;
    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        userId: userData?.id,
        text,
      });
      if (!userData || !text || !article) {
        return rejectWithValue('no data');
      }
      if (!response.data) {
        throw new Error();
      }
      dispatch(fetchCommentsByArticleId(article?.id));

      return response.data;
    } catch (error) {
      return rejectWithValue('ERROR');
    }
  },
);

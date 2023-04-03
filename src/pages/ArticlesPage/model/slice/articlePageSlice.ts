import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/lodalStorage';
import { ArticlePageSchema } from '../types/articlePageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>((state) => state.articlesPage || articlesAdapter.getInitialState());

const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.PLATE,
    page: 1,
    hasMore: true,
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initialState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.LIST ? 3 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articlesAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlePageReducer, actions: articlePageActions } = articlePageSlice;

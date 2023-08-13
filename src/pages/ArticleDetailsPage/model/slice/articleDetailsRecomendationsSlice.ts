import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { ArticleDetailsRecomendationsSchema } from '../types/ArticleDetailsRecomendationsSchema'
import { fetchArticleRecomendations } from '../services/fetchArticleRecomendations/fetchArticleRecomendations'

import { StateSchema } from '@/app/providers/StoreProvider'
import { Article } from '@/entities/Article'

const recomendationAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})

export const getArticleRecomendations = recomendationAdapter.getSelectors<StateSchema>(
  (state) => state.articlesDetailsPage?.recommendation || recomendationAdapter.getInitialState(),
)

const articleDetailsRecomendationsSlice = createSlice({
  name: 'articleDetailsRecomendationSlice',
  initialState: recomendationAdapter.getInitialState<ArticleDetailsRecomendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecomendations.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleRecomendations.fulfilled, (state, action) => {
        state.isLoading = false
        recomendationAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleRecomendations.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articleDetailsRecomendationsReducer, actions: articleDetailsRecomendationsActions } =
  articleDetailsRecomendationsSlice

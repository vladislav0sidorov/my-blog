import { rtkApi } from '@/shared/api/rtkApi'

const recomendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecomendationsList: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
          _expand: 'user',
        },
      }),
    }),
  }),
})

export const getArticleRecomendationsList = recomendationsApi.useGetArticleRecomendationsListQuery

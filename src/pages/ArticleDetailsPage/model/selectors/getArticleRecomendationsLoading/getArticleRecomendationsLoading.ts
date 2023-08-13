import { StateSchema } from '@/app/providers/StoreProvider'

export function getArticleRecomendationsLoading(state: StateSchema) {
  return state.articlesDetailsPage?.recommendation.isLoading
}

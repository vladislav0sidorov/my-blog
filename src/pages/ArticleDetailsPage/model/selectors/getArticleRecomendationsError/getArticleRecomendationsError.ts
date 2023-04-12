import { StateSchema } from 'app/providers/StoreProvider';

export function getArticleRecomendationsError(state: StateSchema) {
  return state.articlesDetailsPage?.recommendation.error;
}

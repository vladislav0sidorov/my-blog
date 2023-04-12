import { StateSchema } from 'app/providers/StoreProvider';

export function getArticleCommentsLoading(state: StateSchema) {
  return state.articlesDetailsPage?.comments.isLoading;
}

import { StateSchema } from '@/app/providers/StoreProvider';

export function getArticleCommentsError(state: StateSchema) {
  return state.articlesDetailsPage?.comments.error;
}

import { StateSchema } from 'app/providers/StoreProvider';

export function getArticlesPageError(state: StateSchema) {
  return state.articlesPage?.error;
}

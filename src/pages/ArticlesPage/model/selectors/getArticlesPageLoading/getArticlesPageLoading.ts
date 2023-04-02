import { StateSchema } from 'app/providers/StoreProvider';

export function getArticlesPageLoading(state: StateSchema) {
  return state.articlesPage?.isLoading || false;
}

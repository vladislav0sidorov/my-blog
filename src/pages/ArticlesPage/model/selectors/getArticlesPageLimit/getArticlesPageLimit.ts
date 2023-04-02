import { StateSchema } from 'app/providers/StoreProvider';

export function getArticlesPageLimit(state: StateSchema) {
  return state.articlesPage?.limit || 9;
}

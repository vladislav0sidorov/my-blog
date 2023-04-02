import { StateSchema } from 'app/providers/StoreProvider';

export function getArticlesPageHasMore(state: StateSchema) {
  return state.articlesPage?.hasMore;
}

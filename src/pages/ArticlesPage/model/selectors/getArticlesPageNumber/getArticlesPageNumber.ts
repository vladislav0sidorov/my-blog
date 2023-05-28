import { StateSchema } from '@/app/providers/StoreProvider';

export function getArticlesPageNumber(state: StateSchema) {
  return state.articlesPage?.page || 1;
}

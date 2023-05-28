import { StateSchema } from '@/app/providers/StoreProvider';

export function getArticlesPageSearch(state: StateSchema) {
  return state.articlesPage?.search ?? '';
}

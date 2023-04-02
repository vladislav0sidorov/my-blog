import { StateSchema } from 'app/providers/StoreProvider';

export function getArticlesPageView(state: StateSchema) {
  return state.articlesPage?.view;
}

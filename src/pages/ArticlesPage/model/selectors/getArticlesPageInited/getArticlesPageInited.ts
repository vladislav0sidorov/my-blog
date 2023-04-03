import { StateSchema } from 'app/providers/StoreProvider';

export function getArticlesPageInited(state: StateSchema) {
  return state.articlesPage?._inited;
}

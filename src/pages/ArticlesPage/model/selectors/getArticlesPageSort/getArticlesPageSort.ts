import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField } from 'entities/Article';

export function getArticlesPageSort(state: StateSchema) {
  return state.articlesPage?.sort ?? ArticleSortField.CREATED;
}

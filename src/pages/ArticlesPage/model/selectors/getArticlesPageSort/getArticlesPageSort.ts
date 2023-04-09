import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField } from 'entities/Article/model/types/article';

export function getArticlesPageSort(state: StateSchema) {
  return state.articlesPage?.sort ?? ArticleSortField.CREATED;
}

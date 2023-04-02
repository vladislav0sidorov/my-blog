import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export function getArticlesPageView(state: StateSchema) {
  return state.articlesPage?.view || ArticleView.PLATE;
}

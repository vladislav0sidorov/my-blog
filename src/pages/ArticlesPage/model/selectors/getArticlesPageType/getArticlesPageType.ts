import { StateSchema } from '@/app/providers/StoreProvider'
import { ArticleType } from '@/entities/Article'

export function getArticlesPageType(state: StateSchema) {
  return state.articlesPage?.type ?? ArticleType.ALL
}

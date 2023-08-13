import { StateSchema } from '@/app/providers/StoreProvider'

export function getArticlesPageOrder(state: StateSchema) {
  return state.articlesPage?.orderSort ?? 'asc'
}

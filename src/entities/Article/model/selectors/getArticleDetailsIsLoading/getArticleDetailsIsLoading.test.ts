import { getArticleDetailsIsLoading } from './getArticleDetailsIsLoading'

import { StateSchema } from '@/app/providers/StoreProvider'

describe('getArticleDetailsIsLoading.test', () => {
  test('should return loading true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    }
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
  })
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined)
  })
})

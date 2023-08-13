import { getArticleDetailsError } from './getArticleDetailsError'

import { StateSchema } from '@/app/providers/StoreProvider'

describe('getArticleDetailsError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    }
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
  })
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
  })
})

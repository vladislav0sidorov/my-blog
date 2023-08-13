import { getArticleDetailsData } from './getArticleDetailsData'

import { StateSchema } from '@/app/providers/StoreProvider'

describe('getArticleDetailsData.test', () => {
  test('should return content data', () => {
    const data = {
      id: '1',
      title: 'text',
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })
})

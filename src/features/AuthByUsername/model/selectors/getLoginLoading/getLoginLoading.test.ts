import { getLoginLoading } from './getLoginLoading'

import { StateSchema } from '@/app/providers/StoreProvider'

describe('getLoginLoading.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
      },
    }
    expect(getLoginLoading(state as StateSchema)).toEqual(true)
  })
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: false,
      },
    }
    expect(getLoginLoading(state as StateSchema)).toEqual(false)
  })
})

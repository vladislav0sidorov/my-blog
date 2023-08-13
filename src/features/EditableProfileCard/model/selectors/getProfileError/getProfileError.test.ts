import { getProfileError } from './getProfileError'

import { StateSchema } from '@/app/providers/StoreProvider'

describe('getProfileError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error',
      },
    }
    expect(getProfileError(state as StateSchema)).toEqual('error')
  })
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})

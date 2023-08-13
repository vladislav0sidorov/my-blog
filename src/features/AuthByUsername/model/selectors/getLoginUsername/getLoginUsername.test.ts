import { getLoginUsername } from './getLoginUsername'

import { StateSchema } from '@/app/providers/StoreProvider'

describe('getLoginUsername.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'mail',
      },
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('mail')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual(undefined)
  })
})

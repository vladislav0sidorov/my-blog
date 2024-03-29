import { getLoginPassword } from './getLoginPassword'

import { StateSchema } from '@/app/providers/StoreProvider'

describe('getLoginPassword.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: '11234',
      },
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('11234')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual(undefined)
  })
})

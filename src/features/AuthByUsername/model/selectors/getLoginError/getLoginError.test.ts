import { getLoginError } from './getLoginError'

import { StateSchema } from '@/app/providers/StoreProvider'

describe('getLoginError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        error: 'error',
      },
    }
    expect(getLoginError(state as StateSchema)).toEqual('error')
  })
  test('should work with epmty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})

import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileError } from '../../consts/consts'

import { StateSchema } from '@/app/providers/StoreProvider'

describe('getProfileValidateErrors.test', () => {
  test('should work with failed state', () => {
    const validateError = [
      ValidateProfileError.INCORECT_FIRST_NAME,
      ValidateProfileError.INCORECT_LAST_NAME,
      ValidateProfileError.INCORECT_AGE,
      ValidateProfileError.INCORECT_USERNAME,
      ValidateProfileError.INCORECT_CITY,
      ValidateProfileError.INCORECT_CURRENCY,
      ValidateProfileError.INCORECT_COUNTRY,
      ValidateProfileError.INCORECT_AVATAR,
    ]
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError,
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateError)
  })
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})

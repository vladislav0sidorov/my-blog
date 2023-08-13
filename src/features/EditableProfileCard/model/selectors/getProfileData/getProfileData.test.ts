import { getProfileData } from './getProfileData'

import { StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

describe('getProfileData.test', () => {
  test('should return content data', () => {
    const data = {
      firstname: 'Venya',
      lastname: 'Pak',
      age: 22,
      username: 'VenyaPakTV',
      currency: Currency.USD,
      country: Country.Russia,
      city: 'Surgut',
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})

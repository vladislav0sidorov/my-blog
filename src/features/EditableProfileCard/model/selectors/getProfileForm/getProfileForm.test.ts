import { getProfileForm } from './getProfileForm'

import { StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

describe('getProfileError.test', () => {
  test('should return data form', () => {
    const form = {
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
        form,
      },
    }
    expect(getProfileForm(state as StateSchema)).toEqual(form)
  })
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})

import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { profileReducer } from '../../model/slice/profileSlice'
import { EditableProfileCard } from './EditableProfileCard'

import { componentRender } from '@/shared/config/tests/componentRender/componentRender'
import { Profile } from '@/entities/Profile'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { $api } from '@/shared/api/api'

const profile: Profile = {
  id: '1',
  firstname: 'Vladislav',
  lastname: 'Sidorov',
  age: 22,
  currency: Currency.GEL,
  country: Country.Georgia,
  city: 'Tbilisi',
  username: 'Ylquiorra',
  avatar:
    'https://sun9-60.userapi.com/impg/eqo5sYxr_jyw_yWO9_pKJRMkx8WVwVENfJrecQ/1zVSkEZs5NM.jpg?size=1620x2160&quality=95&sign=73cab6427b2934395f04d96835eb3720&type=album',
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'Ylquiorra',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
}

describe('features/EditableProfileCard', () => {
  test('Click on the edit button', async () => {
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton'))
  })

  test('For cancel values have to return', async () => {
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'))
    await userEvent.clear(screen.getByTestId('ProfileCard.LastName'))
    await userEvent.clear(screen.getByTestId('ProfileCard.Age'))
    await userEvent.clear(screen.getByTestId('ProfileCard.Username'))
    await userEvent.clear(screen.getByTestId('ProfileCard.City'))

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user')
    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'user')
    await userEvent.type(screen.getByTestId('ProfileCard.Age'), '25')
    await userEvent.type(screen.getByTestId('ProfileCard.Username'), 'admin')
    await userEvent.type(screen.getByTestId('ProfileCard.City'), 'New-York')

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('user')
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('user')
    expect(screen.getByTestId('ProfileCard.Age')).toHaveValue('25')
    expect(screen.getByTestId('ProfileCard.Username')).toHaveValue('admin')
    expect(screen.getByTestId('ProfileCard.City')).toHaveValue('New-York')

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('Vladislav')
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('Sidorov')
    expect(screen.getByTestId('ProfileCard.Age')).toHaveValue('22')
    expect(screen.getByTestId('ProfileCard.Username')).toHaveValue('Ylquiorra')
    expect(screen.getByTestId('ProfileCard.City')).toHaveValue('Tbilisi')
  })

  test('Error has to appear', async () => {
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'))

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
  })

  test('If there are have not errors PUT request have to submit', async () => {
    const mockPutRequest = jest.spyOn($api, 'put')
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user')

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

    expect(mockPutRequest).toHaveBeenCalled()
  })
})

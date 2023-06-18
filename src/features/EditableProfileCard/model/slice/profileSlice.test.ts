import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema } from '../types/EditableProfileCardSchema';
import { ValidateProfileError } from '../consts/consts';

import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

const data = {
  firstname: 'Venya',
  lastname: 'Pak',
  age: 22,
  username: 'VenyaPakTV',
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Surgut',
  avatar: 'link',
};

describe('loginSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(false)),
    ).toEqual({ readonly: false });
  });

  test('test set cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.cancelEditProfile(),
      ),
    ).toEqual({
      readonly: true,
      validateError: undefined,
      data,
      form: data,
    });
  });
  test('test set update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        username: 'new-username',
      },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: 'new-username' }),
      ),
    ).toEqual({
      form: {
        username: 'new-username',
      },
    });
  });
  test('test update profile pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.INCORECT_AVATAR],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });
  test('test update profile fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      readonly: false,
      validateError: [ValidateProfileError.INCORECT_AVATAR],
      data,
      form: data,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual({
      isLoading: false,
      readonly: true,
      validateError: undefined,
      data,
      form: data,
    });
  });
});

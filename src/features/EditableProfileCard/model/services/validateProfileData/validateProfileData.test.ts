import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../consts/consts';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('validateProfileData.test', () => {
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

  test('success', async () => {
    const result = await validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('incorrect all', async () => {
    const result = await validateProfileData({
      firstname: '',
      lastname: '',
      age: undefined,
      username: '',
      currency: undefined,
      country: undefined,
      city: '',
      avatar: '',
    });

    expect(result).toEqual([
      ValidateProfileError.INCORECT_FIRST_NAME,
      ValidateProfileError.INCORECT_LAST_NAME,
      ValidateProfileError.INCORECT_AGE,
      ValidateProfileError.INCORECT_USERNAME,
      ValidateProfileError.INCORECT_CURRENCY,
      ValidateProfileError.INCORECT_COUNTRY,
      ValidateProfileError.INCORECT_AVATAR,
      ValidateProfileError.INCORECT_CITY,
    ]);
  });

  test('incorrect first name', async () => {
    const result = await validateProfileData({ ...data, firstname: '' });

    expect(result).toEqual([ValidateProfileError.INCORECT_FIRST_NAME]);
  });

  test('incorrect last name', async () => {
    const result = await validateProfileData({ ...data, lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORECT_LAST_NAME]);
  });

  test('incorrect age', async () => {
    const result = await validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORECT_AGE]);
  });

  test('incorrect user name', async () => {
    const result = await validateProfileData({ ...data, username: '' });

    expect(result).toEqual([ValidateProfileError.INCORECT_USERNAME]);
  });

  test('incorrect country', async () => {
    const result = await validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORECT_COUNTRY]);
  });

  test('incorrect currency', async () => {
    const result = await validateProfileData({ ...data, currency: undefined });

    expect(result).toEqual([ValidateProfileError.INCORECT_CURRENCY]);
  });

  test('incorrect city', async () => {
    const result = await validateProfileData({ ...data, city: '' });

    expect(result).toEqual([ValidateProfileError.INCORECT_CITY]);
  });

  test('incorrect avatar', async () => {
    const result = await validateProfileData({ ...data, avatar: '' });

    expect(result).toEqual([ValidateProfileError.INCORECT_AVATAR]);
  });
});

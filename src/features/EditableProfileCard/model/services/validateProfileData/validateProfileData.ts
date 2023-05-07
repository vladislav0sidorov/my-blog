import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const {
    firstname, lastname, age, username, currency, country, avatar, city,
  } = profile;

  const errors: ValidateProfileError[] = [];

  if (!firstname) {
    errors.push(ValidateProfileError.INCORECT_FIRST_NAME);
  }
  if (!lastname) {
    errors.push(ValidateProfileError.INCORECT_LAST_NAME);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORECT_AGE);
  }

  if (!username) {
    errors.push(ValidateProfileError.INCORECT_USERNAME);
  }

  if (!currency) {
    errors.push(ValidateProfileError.INCORECT_CURRENCY);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORECT_COUNTRY);
  }

  if (!avatar) {
    errors.push(ValidateProfileError.INCORECT_AVATAR);
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORECT_CITY);
  }
  return errors;
};

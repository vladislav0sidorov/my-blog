import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
  INCORECT_FIRST_NAME = 'INCORECT_FIRST_NAME',
  INCORECT_LAST_NAME = 'INCORECT_LAST_NAME',
  INCORECT_AGE = 'INCORECT_AGE',
  INCORECT_USERNAME = 'INCORECT_USERNAME',
  INCORECT_AVATAR = 'INCORECT_AVATAR',
  INCORECT_CITY = 'INCORECT_CITY',
  INCORECT_CURRENCY = 'INCORECT_CURRENCY',
  INCORECT_COUNTRY = 'INCORECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  validateError?: ValidateProfileError[];
}

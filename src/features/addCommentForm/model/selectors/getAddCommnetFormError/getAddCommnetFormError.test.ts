import { getAddCommnetFormError } from './getAddCommnetFormError';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getAddCommnetFormError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'error',
      },
    };
    expect(getAddCommnetFormError(state as StateSchema)).toEqual('error');
  });
  test('should work with epmty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommnetFormError(state as StateSchema)).toEqual(undefined);
  });
});

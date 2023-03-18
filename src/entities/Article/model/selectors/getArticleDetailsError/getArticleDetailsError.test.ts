import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsError } from './getArticleDetailsError';

describe('getArticleDetailsError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});

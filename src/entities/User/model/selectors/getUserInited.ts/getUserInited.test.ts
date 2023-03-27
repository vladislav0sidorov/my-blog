import { StateSchema } from 'app/providers/StoreProvider';
import { getUserInited } from './getUserInited';

describe('getUserInited.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _inited: true,
      },
    };
    expect(getUserInited(state as StateSchema)).toEqual(true);
  });
});

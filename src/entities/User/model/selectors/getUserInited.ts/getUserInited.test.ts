import { getUserInited } from './getUserInited';

import { StateSchema } from '@/app/providers/StoreProvider';

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

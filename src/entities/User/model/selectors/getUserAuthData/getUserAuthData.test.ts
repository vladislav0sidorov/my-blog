import { StateSchema } from '@/app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

const authData = {
  id: '2',
  username: 'Ksu',
  avatar:
    'https://sun9-36.userapi.com/impf/c850220/v850220268/12e2c7/TxYnZV8Q7N4.jpg?size=1536x2048&quality=96&sign=e3a114e332c19380899361b7d5084f5d&type=album',
};

describe('getUserAuthData.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData,
      },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual(authData);
  });
});

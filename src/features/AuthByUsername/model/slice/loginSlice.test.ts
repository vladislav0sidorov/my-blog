import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'mail' };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('mail123'))).toEqual({ username: 'mail123' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('1234'))).toEqual({ password: '1234' });
  });
});

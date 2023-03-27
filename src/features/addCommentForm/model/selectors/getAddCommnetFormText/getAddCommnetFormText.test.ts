import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommnetFormText } from './getAddCommnetFormText';

describe('getAddCommnetFormText.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'some text',
      },
    };
    expect(getAddCommnetFormText(state as StateSchema)).toEqual('some text');
  });
  test('should work with epmty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommnetFormText(state as StateSchema)).toEqual(undefined);
  });
});

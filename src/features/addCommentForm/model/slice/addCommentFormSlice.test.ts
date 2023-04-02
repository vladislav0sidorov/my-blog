import { AddCommentFormSchema } from '../types/addCommentForm';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from './addCommentFormSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<AddCommentFormSchema> = { text: 'mail' };
    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        addCommentFormActions.setText('mail123'),
      ),
    ).toEqual({ text: 'mail123' });
  });
});

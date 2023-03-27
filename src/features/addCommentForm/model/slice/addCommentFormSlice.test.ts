import { addCommentFormSchema } from '../types/addCommentForm';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from './addCommentFormSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<addCommentFormSchema> = { text: 'mail' };
    expect(
      addCommentFormReducer(
        state as addCommentFormSchema,
        addCommentFormActions.setText('mail123'),
      ),
    ).toEqual({ text: 'mail123' });
  });
});

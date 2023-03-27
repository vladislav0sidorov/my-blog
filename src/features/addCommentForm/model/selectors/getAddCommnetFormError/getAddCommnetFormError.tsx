import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommnetFormError = (state: StateSchema) => state?.addCommentForm?.error;

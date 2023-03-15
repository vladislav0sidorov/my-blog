import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsError = (state: StateSchema) => state.artileDetails?.error;

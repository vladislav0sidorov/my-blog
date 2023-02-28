import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginLoading = (state: StateSchema) => state?.login?.isLoading;

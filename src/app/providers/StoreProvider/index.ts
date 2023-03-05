import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type { StateSchema, ThunkConfig } from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  AppDispatch,
  ThunkConfig,
};

export { isUserAdmin, isUserManager, getUserRoleSelector } from './model/selectors/userRoleSelector/userRoleSelector';

export { getUserInited } from './model/selectors/getUserInited.ts/getUserInited';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export { userActions, userReducer } from './model/slice/userSlice';

export { UserRole } from './model/consts/consts';
export type { User, UserSchema } from './model/types/user';

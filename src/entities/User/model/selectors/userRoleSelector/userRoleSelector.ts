import { createSelector } from '@reduxjs/toolkit';

import { UserRole } from '../../consts/consts';

import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserRoleSelector = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoleSelector, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserManager = createSelector(getUserRoleSelector, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));

import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { UserRole } from '../../consts/consts';

export const getUserRoleSelector = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoleSelector, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserManager = createSelector(getUserRoleSelector, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));

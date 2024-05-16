import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { type UserSchema } from 'entities/User';

export const getUserAuthDataValue = createSelector(
    getUserAuthData,
    (user: UserSchema) => user.authData
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { type User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { type ThunkConfig } from 'app/providers/StoreProvider';

export interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk <User, LoginByUserNameProps, ThunkConfig<string>>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;

        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            console.log('response.data', response.data);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);

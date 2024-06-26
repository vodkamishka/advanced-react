import { type CounterSchema } from 'entities/Counter/';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUserName';
import { type EnhancedStore, type Reducer, type ReducersMapObject, type UnknownAction } from '@reduxjs/toolkit';
import { type ProfileSchema } from 'entities/Profile';
import { type AxiosInstance } from 'axios';
import type { To } from '@remix-run/router';
import type { NavigateOptions } from 'react-router/dist/lib/context';
import { BaseThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // Acync reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: UnknownAction) => ({ counter: CounterSchema; user: UserSchema; loginForm?: LoginSchema });
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
}

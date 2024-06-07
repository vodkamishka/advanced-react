import { type CounterSchema } from 'entities/Counter/';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUserName';
import { type EnhancedStore, type Reducer, type ReducersMapObject, type UnknownAction } from '@reduxjs/toolkit';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // Acync reducers
    loginForm?: LoginSchema;
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

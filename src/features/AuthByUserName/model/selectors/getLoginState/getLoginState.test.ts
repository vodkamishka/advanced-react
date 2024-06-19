import { type DeepPartial } from 'utility-types';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: 'admin123',
                isLoading: true,
                error: 'not working'
            }
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'admin',
            password: 'admin123',
            isLoading: true,
            error: 'not working'
        });
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});

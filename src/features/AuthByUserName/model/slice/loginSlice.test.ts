import { type LoginSchema } from 'features/AuthByUserName';
import { type DeepPartial } from 'utility-types';
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/LoginSlice';

describe('loginSlice.test', () => {
    test('test test username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUserName('123456')
        )).toStrictEqual({ username: '123456' });
    });

    test('test test password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123456')
        )).toStrictEqual({ password: '123456' });
    });
});

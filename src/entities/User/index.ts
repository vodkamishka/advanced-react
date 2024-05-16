import {
    getUserAuthDataValue
} from 'entities/User/model/selectors/getUserAuthDataValue/getUserAuthDataValue';

export {
    userReducer,
    userActions
} from './model/slice/userSlice';

export type {
    UserSchema,
    User
} from './model/types/user';

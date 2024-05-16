import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/LoginSlice';
import { getLoginState } from '../..//model/selectors/getLoginState/getLoginState';
import { loginByUserName } from '../../model/serivces/loginByUserName/loginByUserName';
import {TextTheme} from "shared/ui/Text/Text";
import { Text } from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string;
}
export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        return dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')}/>
            {error && <Text text={error} theme={TextTheme.ERROR}/>}
            <Input
                autofocus
                type={'text'}
                className={cls.input}
                placeholder={t('Enter username')}
                onChange={onChangeUserName}
                value={username}
            />
            <Input
                type={'text'}
                className={cls.input}
                placeholder={t('Enter password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

import React from 'react';

import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariables } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import { useDispatch, useSelector } from 'react-redux';

import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = React.memo((props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation('modal-auth');
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = React.useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = React.useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = React.useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} theme={TextTheme.SECONDORY} />
      {error && <Text text={t('Вы ввели невереный логин или пароль')} theme={TextTheme.ERROR} />}
      <Input value={username} onChange={onChangeUsername} autoFocus placeholder={t('Введите имя пользователя')} className={cls.input} type="text" />
      <Input value={password} onChange={onChangePassword} placeholder={t('Введите пароль')} className={cls.input} type="text" />
      <Button disabled={isLoading} onClick={onLoginClick} theme={ButtonVariables.OUTLINE} className={cls.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  );
});

import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import cls from './LoginForm.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button as ButtonDeprecated, ButtonVariables } from '@/shared/ui/deprecated/Button'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { InputVariable } from '@/shared/ui/deprecated/Input/ui/Input'
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text/ui/Text'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { Input } from '@/shared/ui/redesigned/Input'
import { Button } from '@/shared/ui/redesigned/Button'

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  login: loginReducer,
}

const LoginForm = React.memo((props: LoginFormProps) => {
  const { className, onSuccess } = props
  const { t } = useTranslation('modal-auth')
  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = React.useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch],
  )

  const onChangePassword = React.useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch],
  )

  const onLoginClick = React.useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }, [dispatch, username, password, onSuccess])

  const deprecatedContent = (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <TextDeprecated title={t('Форма авторизации')} theme={TextTheme.SECONDORY} />
      {error === 'ERROR' && <TextDeprecated text={t('Вы ввели невереный логин или пароль')} theme={TextTheme.ERROR} />}
      <InputDeprecated
        value={username}
        theme={InputVariable.PRIMARY}
        onChange={onChangeUsername}
        autoFocus
        placeholder={t('Введите имя пользователя')}
        className={cls.input}
        type="text"
      />
      <InputDeprecated
        value={password}
        theme={InputVariable.PRIMARY}
        onChange={onChangePassword}
        placeholder={t('Введите пароль')}
        className={cls.input}
        type="text"
      />
      <ButtonDeprecated
        disabled={isLoading}
        onClick={onLoginClick}
        theme={ButtonVariables.OUTLINE}
        className={cls.loginBtn}
      >
        {t('Войти')}
      </ButtonDeprecated>
    </div>
  )

  const redesignedContent = (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error === 'ERROR' && <Text text={t('Вы ввели невереный логин или пароль')} variant="error" />}
      <Input
        value={username}
        onChange={onChangeUsername}
        autoFocus
        placeholder={t('Введите имя пользователя')}
        className={cls.input}
        type="text"
      />
      <Input
        value={password}
        onChange={onChangePassword}
        placeholder={t('Введите пароль')}
        className={cls.input}
        type="text"
      />
      <Button disabled={isLoading} onClick={onLoginClick} variant="outline" className={cls.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  )

  return (
    <DynamicModuleLoader removeAfterUnmount={false} reducers={initialReducers}>
      <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
    </DynamicModuleLoader>
  )
})

export default LoginForm

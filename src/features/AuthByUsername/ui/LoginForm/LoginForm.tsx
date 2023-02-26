import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariables } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('modal-auth');

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input autoFocus placeholder={t('Введите имя пользователя')} className={cls.input} type="text" />
      <Input placeholder={t('Введите пароль')} className={cls.input} type="text" />
      <Button theme={ButtonVariables.OUTLINE} className={cls.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  );
};

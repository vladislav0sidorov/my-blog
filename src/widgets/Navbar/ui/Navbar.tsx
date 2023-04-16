import React, { memo } from 'react';

import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { Button, ButtonVariables } from 'shared/ui/Button';
import { AppLink, ApplinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = React.useState(false);
  const authData = useSelector(getUserAuthData);

  const onClose = React.useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = React.useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = React.useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      {authData ? (
        <AppLink className={cls.createArticle} theme={ApplinkTheme.THIRD} to={RoutePath.article_create}>
          {t('Создать статью')}
        </AppLink>
      ) : null}
      {authData ? (
        <Button onClick={onLogout} theme={ButtonVariables.CLEAR_INVERTED} className={cls.links}>
          {t('Выйти')}
        </Button>
      ) : (
        <Button onClick={onShowModal} theme={ButtonVariables.CLEAR_INVERTED} className={cls.loginLink}>
          {t('Войти')}
        </Button>
      )}
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
    </nav>
  );
});

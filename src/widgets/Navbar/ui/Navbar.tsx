import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cls from './Navbar.module.scss';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Button, ButtonVariables } from '@/shared/ui/Button';
import { AppLink, ApplinkTheme } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { getRouteArticleCreate } from '@/shared/const/router';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = React.useState(false);

  const authData = useSelector(getUserAuthData);

  const onClose = React.useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = React.useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      {authData ? (
        <AppLink theme={ApplinkTheme.THIRD} to={getRouteArticleCreate()}>
          {t('Создать статью')}
        </AppLink>
      ) : null}
      <HStack gap="16" className={cls.actions}>
        {authData ? (
          <>
            <NotificationButton />
            <AvatarDropdown />
          </>
        ) : (
          <Button onClick={onShowModal} theme={ButtonVariables.CLEAR_INVERTED}>
            {t('Войти')}
          </Button>
        )}
      </HStack>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
    </nav>
  );
});

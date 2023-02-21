import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { Button, ButtonVariables } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = React.useState(false);

  const onToggleModal = React.useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>

      <Button onClick={onToggleModal} theme={ButtonVariables.CLEAR_INVERTED} className={cls.links}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in nulla repellendus pariatur aliquam totam quaerat, odit animi vel. Unde.')}
      </Modal>

    </div>
  );
};

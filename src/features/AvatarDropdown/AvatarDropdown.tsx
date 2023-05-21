import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { Dropdown } from 'shared/ui/Popups';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = React.memo((props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onLogout = React.useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvalable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      direction="bottom left"
      items={[
        ...(isAdminPanelAvalable
          ? [
            {
              content: t('Админ'),
              href: RoutePath.admin_panel,
            },
          ]
          : []),
        {
          content: t('Профиль'),
          href: RoutePath.profile + authData.id,
        },
        {
          content: t('Выйти'),
          onClick: onLogout,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
});

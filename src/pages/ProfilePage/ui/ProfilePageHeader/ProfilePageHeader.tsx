import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button, ButtonVariables } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadOnly } from 'entities/Profile';
import React from 'react';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';

interface ProfilePageHeaderProps {
  className?: string;
  onEdit?: () => void;
  onCancelEdit?: () => void;
  onSave?: () => void;
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = (props) => {
  const {
    className, onEdit, onCancelEdit, onSave,
  } = props;
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadOnly);

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <div>
          {readonly ? (
            <Button theme={ButtonVariables.OUTLINE} onClick={onEdit}>
              {t('Редактировать')}
            </Button>
          ) : (
            <HStack gap="16">
              <Button theme={ButtonVariables.OUTLINE_RED} onClick={onCancelEdit}>
                {t('Отменить')}
              </Button>
              <Button theme={ButtonVariables.OUTLINE} onClick={onSave}>
                {t('Сохранить')}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
};

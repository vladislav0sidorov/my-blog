import { classNames } from 'shared/lib/ClassNames/ClassNames';
import React from 'react';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { EditableProdileCardHeader } from 'features/EditableProfileCard/ui/EditableProdileCardHeader/EditableProdileCardHeader';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text title={t('Мы не смогли найти этого пользователя')} />;
  }

  return (
    <Page>
      <VStack max gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};
export default ProfilePage;

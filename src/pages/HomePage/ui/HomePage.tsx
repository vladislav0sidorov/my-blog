import React from 'react';

import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page';
import { Text } from 'shared/ui/Text';

const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <Page>
      <Text text={t('Домашняя страница')} />
    </Page>
  );
};

export default HomePage;

import React from 'react';

import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';

const HomePage = () => {
  const { t } = useTranslation('home');

  return <Text text={t('Домашняя страница')} />;
};

export default HomePage;

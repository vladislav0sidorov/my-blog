import { BugButton } from 'app/providers/ErrorBoundery';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: FC = (props) => {
  const { t } = useTranslation('home');

  return (
    <div>
      <BugButton />
      {t('Домашняя страница')}
    </div>
  );
};

export default HomePage;

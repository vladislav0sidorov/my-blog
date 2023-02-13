import { BugButton } from 'app/providers/ErrorBoundery';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <div>
      <BugButton />
      {t('Домашняя страница')}
    </div>
  );
};

export default HomePage;

import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <div>
      {t('Домашняя страница')}
    </div>
  );
};

export default HomePage;

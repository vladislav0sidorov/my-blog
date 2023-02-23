import { BugButton } from 'app/providers/ErrorBoundery';
// import { Counter } from 'entities/Counter';

import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <div>
      <BugButton />
      {t('Домашняя страница')}
      {/* <Counter /> */}
    </div>
  );
};

export default HomePage;

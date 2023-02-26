import { BugButton } from 'app/providers/ErrorBoundery';
import React from 'react';
// import { Counter } from 'entities/Counter';

import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';

const HomePage = () => {
  const { t } = useTranslation('home');
  const [value, setValue] = React.useState('');

  const onChange = (val:string) => {
    setValue(val);
  };

  return (
    <div>
      <BugButton />
      {t('Домашняя страница')}
      {/* <Counter /> */}
    </div>
  );
};

export default HomePage;

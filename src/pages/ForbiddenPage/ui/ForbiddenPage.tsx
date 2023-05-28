import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';
// import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
  className?: string;
}

export const ForbiddenPage: FC<ForbiddenPageProps> = React.memo((props) => {
  const { className } = props;
  const { t } = useTranslation('forbidden-page');

  return (
    <Page>
      <Text title={t('У вас нет доступа к этой странице.')} />
    </Page>
  );
});

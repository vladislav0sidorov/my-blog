import { useTranslation } from 'react-i18next';

import React from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';

import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';
import cls from './ArticleDetailsPage.module.scss';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage: React.FC<AdminPanelPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('admin');

  return (
    <Page>
      <Text title={t('Это панель администратора')} />
    </Page>
  );
};
export default AdminPanelPage;

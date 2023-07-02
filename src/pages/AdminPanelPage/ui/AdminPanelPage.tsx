import { useTranslation } from 'react-i18next';
import React from 'react';

import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage: React.FC<AdminPanelPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('admin');

  return (
    <Page data-testid="AdminPanelPage">
      <Text title={t('Это панель администратора')} />
    </Page>
  );
};
export default AdminPanelPage;

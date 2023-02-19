import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = (props) => {
  const { t } = useTranslation('about');

  return <div>{t('О сайте')}</div>;
};
export default AboutPage;

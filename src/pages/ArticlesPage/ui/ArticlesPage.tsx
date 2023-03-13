import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(cls.ArticlesPage, {}, [className])}>{t('ArticlesPage')}</div>;
};

export default ArticlesPage;

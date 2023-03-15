import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
// import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article-details ');

  if (!id) {
    return <div>{t('Не удалось загрузить страницу!')}</div>;
  }

  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  );
};
export default ArticleDetailsPage;

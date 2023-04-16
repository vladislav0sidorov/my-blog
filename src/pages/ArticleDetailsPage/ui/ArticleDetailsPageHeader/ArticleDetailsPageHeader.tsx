import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { Button, ButtonVariables } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/getCanEditArticle/getCanEditArticle';
import { getArticleDetailsData } from 'entities/Article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = React.memo((props) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button onClick={onBackToList} theme={ButtonVariables.OUTLINE}>
        {t('Назад к списку')}
      </Button>
      {canEdit && (
        <Button className={cls.editBtn} onClick={onEditArticle} theme={ButtonVariables.OUTLINE}>
          {t('Редактировать')}
        </Button>
      )}
    </div>
  );
});

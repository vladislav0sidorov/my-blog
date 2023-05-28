import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Button, ButtonVariables } from '@/shared/ui/Button';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { getArticleDetailsData } from '@/entities/Article';

import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle/getCanEditArticle';
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
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Button onClick={onBackToList} theme={ButtonVariables.OUTLINE}>
        {t('Назад к списку')}
      </Button>
      {canEdit && (
        <Button onClick={onEditArticle} theme={ButtonVariables.OUTLINE}>
          {t('Редактировать')}
        </Button>
      )}
    </HStack>
  );
});

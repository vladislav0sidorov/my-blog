import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { ArticleList } from '@/entities/Article';
import { Text, TextSize } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';

import { getArticleRecomendationsList } from '../../api/ArticleRecomendationsListApi';
// import cls from './ArticleRecomendationsList.module.scss';

interface ArticleRecomendationsListProps {
  className?: string;
}

export const ArticleRecomendationsList = memo((props: ArticleRecomendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation('article-list');
  const { data: artciles, isLoading, error } = getArticleRecomendationsList(3);

  if (error) {
    return <Text title={t('Не удалось загрузить список рекомендаций')} />;
  }
  if (isLoading) {
    return <Text title={t('Идет загрузка')} />;
  }

  return (
    <VStack gap="8" className={classNames('', {}, [className])}>
      <Text size={TextSize.L} title={t('Рекомендуем')} />
      <ArticleList isLoading={isLoading} target="_blank" articles={artciles} />
    </VStack>
  );
});

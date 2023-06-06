import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCart } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId?: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId = '' } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticleRating({
    userId: userData?.id ?? '',
    articleId,
  });
  const [rateArticleMutation] = useRateArticle();

  const handleArticleMutation = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? '',
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [articleId, rateArticleMutation, userData?.id],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleArticleMutation(starsCount, feedback);
    },
    [handleArticleMutation],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleArticleMutation(starsCount);
    },
    [handleArticleMutation],
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCart
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      className={className}
      title={t('Оцените статью')}
      successfulTitle={t('Спасибо за ваш отзыв!')}
      feedbackTitle={t('Оставьте свой отзыв, это поможет нам улучшить качество')}
      hasFeedback
    />
  );
});

export default ArticleRating;

import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import React from 'react';

import { Page } from 'widgets/Page';
import { getArticleCommentsLoading } from 'pages/ArticleDetailsPage/model/selectors/getArticleCommentsLoading/getArticleCommentsLoading';

import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { fetchArticleRecomendations } from 'pages/ArticleDetailsPage/model/services/fetchArticleRecomendations/fetchArticleRecomendations';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice';
import { getArticleComments } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { getArticleRecomendations } from 'pages/ArticleDetailsPage/model/slice/articleDetailsRecomendationsSlice';
import { getArticleRecomendationsLoading } from 'pages/ArticleDetailsPage/model/selectors/getArticleRecomendationsLoading/getArticleRecomendationsLoading';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article-details');
  const dispatch = useDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsLoading);
  const recomendationsIsLoading = useSelector(getArticleRecomendationsLoading);
  const recomendations = useSelector(getArticleRecomendations.selectAll);

  const onSendComment = React.useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecomendations());
  });

  if (!id) {
    return <Page>{t('Не удалось загрузить страницу!')}</Page>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text size={TextSize.L} className={cls.commentTitle} title={t('Рекомендуем')} />
        <ArticleList target="_blank" articles={recomendations} isLoading={recomendationsIsLoading} />
        <Text size={TextSize.L} className={cls.commentTitle} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};
export default ArticleDetailsPage;

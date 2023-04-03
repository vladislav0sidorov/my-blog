import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleView } from 'entities/Article';
import { ReducersList, DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from 'features/articleViewSelector';
import React from 'react';
import { Page } from 'shared/ui/Page';
import { Text } from 'shared/ui/Text';
import { articlePageActions, articlePageReducer, getArticles } from '../model/slice/articlePageSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';

import { getArticlesPageView } from '../model/selectors/getArticlesPageView/getArticlesPageView';
import { getArticlesPageLoading } from '../model/selectors/getArticlesPageLoading/getArticlesPageLoading';
import { getArticlesPageError } from '../model/selectors/getArticlesPageError/getArticlesPageError';
import { getArticlesPageNumber } from '../model/selectors/getArticlesPageNumber/getArticlesPageNumber';
import { getArticlesPageHasMore } from '../model/selectors/getArticlesPageHasMore/getArticlesPageHasMore';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { getArticlesPageInited } from '../model/selectors/getArticlesPageInited/getArticlesPageInited';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
// import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageLoading);
  const hasMore = useSelector(getArticlesPageHasMore);
  const page = useSelector(getArticlesPageNumber);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const inited = useSelector(getArticlesPageInited);

  const onChangeView = React.useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view));
    },
    [dispatch],
  );

  const onLoadNextPart = React.useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const reducers: ReducersList = {
    articlesPage: articlePageReducer,
  };

  if (error) {
    return (
      <Page>
        <Text title={t('Произошла ошибка при загрезке статей')} />
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList articles={articles} isLoading={isLoading} view={view} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;

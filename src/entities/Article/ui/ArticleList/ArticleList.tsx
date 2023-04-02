import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList: FC<ArticleListProps> = React.memo((props) => {
  const {
    className, articles, isLoading, view = ArticleView.LIST,
  } = props;
  const { t } = useTranslation();

  const getSkeleton = (view: ArticleView) => new Array(view === ArticleView.PLATE ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />);

  const renderArtcile = (article: Article) => <ArticleListItem className={cls.card} key={article.id} article={article} view={view} />;

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArtcile) : null}
      {' '}
      {isLoading && getSkeleton(view)}
    </div>
  );
});

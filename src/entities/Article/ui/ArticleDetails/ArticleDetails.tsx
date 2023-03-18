import React from 'react';

import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Text } from 'shared/ui/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { TextAling, TextSize, TextTheme } from 'shared/ui/Text/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon';
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import cls from './ArticleDetails.module.scss';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: React.FC<ArticleDetailsProps> = React.memo((props) => {
  const { className, id } = props;
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = React.useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
    default:
      return null;
    }
  }, []);

  React.useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </div>
    );
  } else if (error) {
    content = (
      <div>
        <Text aling={TextAling.CENTER} theme={TextTheme.ERROR} title={t('Error')} />
      </div>
    );
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar className={cls.avatar} src={article?.img} size={200} />
        </div>
        <Text size={TextSize.L} className={cls.title} title={article?.title} text={article?.subtitle} />
        <div className={cls.aricleInfo}>
          <Icon className={cls.icon} Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.aricleInfo}>
          <Icon className={cls.icon} Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
});

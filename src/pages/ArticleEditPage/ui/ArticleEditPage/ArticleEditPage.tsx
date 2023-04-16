import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { Page } from 'widgets/Page';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = React.memo((props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  return <Page className={classNames(cls.articleEditPage, {}, [className])}>{isEdit ? t('Редактирование страницы') : t('Создание новой страницы')}</Page>;
});

export default ArticleEditPage;

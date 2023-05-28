import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Select } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types/sort';
import { SelectOption } from '@/shared/ui/Select/ui/Select';
import { ArticleSortField } from '@/entities/Article';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = React.memo((props) => {
  const {
    className, sort, order, onChangeSort, onChangeOrder,
  } = props;
  const { t } = useTranslation('article-list');

  const sortFieldOptions = React.useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('созданию'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('названию'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам'),
      },
    ],
    [t],
  );

  const orderOptions = React.useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию'),
      },
      {
        value: 'desc',
        content: t('убыванию'),
      },
    ],
    [t],
  );

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select value={sort} onChange={onChangeSort} label={t('Сортировать по')} options={sortFieldOptions} />
      <Select className={cls.order} value={order} onChange={onChangeOrder} label={t('по')} options={orderOptions} />
    </div>
  );
});

import { EntityState } from '@reduxjs/toolkit';
import {
  Article, ArticleView, ArticleType, ArticleSortField,
} from 'entities/Article';
import { SortOrder } from 'shared/types/sort';

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  view: ArticleView;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  orderSort: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  _inited: boolean;
}

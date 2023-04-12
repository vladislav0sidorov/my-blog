import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsRecomendationsSchema } from './ArticleDetailsRecomendationsSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendation: ArticleDetailsRecomendationsSchema;
}

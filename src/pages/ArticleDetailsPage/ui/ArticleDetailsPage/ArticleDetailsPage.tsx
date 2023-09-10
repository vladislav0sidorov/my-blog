import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import React from 'react'

import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'

import { ArticleDetails } from '@/entities/Article'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/Stack'
import { ArticleRecomendationsList } from '@/features/ArticleRecomendationsList'
import { ArticleRating } from '@/features/ArticleRating'
import { toggleFeatures } from '@/shared/lib/features'
import { Card } from '@/shared/ui/Card'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article-details')

  if (!id) {
    return null
  }

  const ArticleRatingCard = toggleFeatures({
    name: `isArticleRaitingEnebled`,
    on: () => <ArticleRating articleId={id} />,
    off: () => <Card>{t('Оценка статей скоро появится!')}</Card>,
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <VStack data-testid="ArticleDetailsPage.ParentBlock" max gap="16">
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRating articleId={id} />
          {ArticleRatingCard}
          <ArticleRecomendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}
export default ArticleDetailsPage

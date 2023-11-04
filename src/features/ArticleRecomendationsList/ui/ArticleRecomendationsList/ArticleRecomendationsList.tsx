import { useTranslation } from 'react-i18next'
import { memo } from 'react'

import { getArticleRecomendationsList } from '../../api/ArticleRecomendationsListApi'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { ArticleList } from '@/entities/Article'
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'

// import cls from './ArticleRecomendationsList.module.scss';

interface ArticleRecomendationsListProps {
  className?: string
}

export const ArticleRecomendationsList = memo((props: ArticleRecomendationsListProps) => {
  const { className } = props
  const { t } = useTranslation('article-list')
  const { data: artciles, isLoading, error } = getArticleRecomendationsList(3)

  if (error) {
    return (
      <ToggleFeaturesComponent
        featureName="isAppRedesigned"
        on={<Text title={t('Не удалось загрузить список рекомендаций')} />}
        off={<TextDeprecated title={t('Не удалось загрузить список рекомендаций')} />}
      />
    )
  }
  if (isLoading) {
    return (
      <ToggleFeaturesComponent
        featureName="isAppRedesigned"
        on={<Text title={t('Идет загрузка')} />}
        off={<TextDeprecated title={t('Идет загрузка')} />}
      />
    )
  }

  return (
    <VStack data-testid="ArticleDetails.ArticleRecomendationsList" gap="8" className={classNames('', {}, [className])}>
      <ToggleFeaturesComponent
        featureName="isAppRedesigned"
        // eslint-disable-next-line i18next/no-literal-string
        on={<Text size="l" title={t('Рекомендуем')} />}
        off={<TextDeprecated size={TextSize.L} title={t('Рекомендуем')} />}
      />

      <ArticleList isLoading={isLoading} target="_blank" articles={artciles} />
    </VStack>
  )
})

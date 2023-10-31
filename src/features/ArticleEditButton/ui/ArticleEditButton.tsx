import React, { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Button as DeprecatedButton, ButtonVariables } from '@/shared/ui/deprecated/Button'
import { getRouteArticleEdit } from '@/shared/const/router'
import { getArticleDetailsData } from '@/entities/Article'
import { Button } from '@/shared/ui/redesigned/Button'

interface ArticleEditButtonProps {
  className?: string
}

export const ArticleEditButton: FC<ArticleEditButtonProps> = React.memo((props) => {
  const { className } = props
  const { t } = useTranslation('article-details')
  const navigate = useNavigate()
  const article = useSelector(getArticleDetailsData)

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article?.id))
    }
  }, [article, navigate])

  const deprecatedContent = (
    <DeprecatedButton onClick={onEditArticle} theme={ButtonVariables.OUTLINE}>
      {t('Редактировать')}
    </DeprecatedButton>
  )

  const redesignedContent = (
    <Button onClick={onEditArticle} variant="outline">
      {t('Редактировать')}
    </Button>
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
})

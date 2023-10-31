import React, { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { getCanEditArticle } from '../../model/selectors/getCanEditArticle/getCanEditArticle'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { getRouteArticles } from '@/shared/const/router'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Button, ButtonVariables } from '@/shared/ui/deprecated/Button'
import { ArticleEditButton } from '@/features/ArticleEditButton'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = React.memo((props) => {
  const { className } = props
  const { t } = useTranslation('article-details')
  const navigate = useNavigate()
  const canEdit = useSelector(getCanEditArticle)

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles())
  }, [navigate])

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Button onClick={onBackToList} theme={ButtonVariables.OUTLINE}>
        {t('Назад к списку')}
      </Button>
      {canEdit && <ArticleEditButton />}
    </HStack>
  )
})

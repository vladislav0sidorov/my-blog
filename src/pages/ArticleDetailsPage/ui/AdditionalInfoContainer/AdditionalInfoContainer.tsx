import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import cls from './AdditionalInfoContainer.module.scss'

import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo'
import { Card } from '@/shared/ui/redesigned/Card'
import { getArticleDetailsData } from '@/entities/Article'

interface AdditionalInfoContainerProps {
  className?: string
}

export const AdditionalInfoContainer: FC<AdditionalInfoContainerProps> = React.memo((props) => {
  const { className } = props

  const article = useSelector(getArticleDetailsData)

  if (!article) {
    return null
  }

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Card className={cls.AdditionalInfoContainer} padding="24" borderRadius="round">
      <ArticleAdditionalInfo author={article.user} views={article.views} createdAt={article.createdAt} />
    </Card>
  )
})

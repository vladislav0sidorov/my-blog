import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = React.memo((props) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation('comment')

  if (isLoading) {
    return (
      <VStack max gap="16" className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    )
  }

  return (
    <VStack gap="8" max className={classNames('', {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => <CommentCard key={comment.id} isLoading={isLoading} comment={comment} />)
      ) : (
        <ToggleFeaturesComponent
          featureName="isAppRedesigned"
          on={<Text text={t('Комментарии отсутствуют')} />}
          off={<TextDeprecated text={t('Комментарии отсутствуют')} />}
        />
      )}
    </VStack>
  )
})

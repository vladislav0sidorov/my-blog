import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { getArticleCommentsLoading } from '../../model/selectors/getArticleCommentsLoading/getArticleCommentsLoading'

import { AddCommentForm } from '@/features/addCommentForm'
import { CommentList } from '@/entities/Comment'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'

// import cls from './ArticleDetailsComments.module.scss';

interface ArticleDetailsCommentsProps {
  className?: string
  id?: string
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = React.memo((props) => {
  const { className, id } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsLoading)

  const onSendComment = React.useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch],
  )

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  return (
    <VStack gap="8" max>
      <ToggleFeaturesComponent
        featureName="isAppRedesigned"
        // eslint-disable-next-line i18next/no-literal-string
        on={<Text size="l" title={t('Комментарии')} />}
        off={<TextDeprecated size={TextSize.L} title={t('Комментарии')} />}
      />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </VStack>
  )
})

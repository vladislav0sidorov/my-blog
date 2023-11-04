import React, { FC } from 'react'

import { Comment } from '../../model/types/comment'
import cls from './CommentCard.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { getRouteProfile } from '@/shared/const/router'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { ToggleFeaturesComponent, toggleFeatures } from '@/shared/lib/features'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Text } from '@/shared/ui/redesigned/Text'
import { Card } from '@/shared/ui/redesigned/Card'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard: FC<CommentCardProps> = React.memo((props) => {
  const { className, comment, isLoading = true } = props

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  })

  if (isLoading) {
    return (
      <VStack
        data-testid="ArticleDetailsPage.CommentCard.Loading"
        max
        gap="8"
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={cls.username} height={16} width={100} />
        </div>
        <Skeleton width="100%" height={50} />
      </VStack>
    )
  }

  if (!comment) {
    return null
  }

  const deprecatedContent = (
    <VStack
      data-testid="ArticleDetailsPage.CommentCard"
      max
      gap="8"
      className={classNames(cls.CommentCard, {}, [className])}
    >
      <AppLinkDeprecated className={cls.header} to={getRouteProfile(comment.user.id)}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <TextDeprecated className={cls.username} text={comment.user.username} />
      </AppLinkDeprecated>
      <TextDeprecated text={comment.text} />
    </VStack>
  )

  const redesignedContent = (
    <Card max>
      <VStack
        data-testid="ArticleDetailsPage.CommentCard"
        max
        gap="8"
        className={classNames(cls.CommentCardRedesigned, {}, [className])}
      >
        <AppLink to={getRouteProfile(comment.user.id)}>
          <HStack gap="8" align="center">
            {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
            <Text text={comment.user.username} bold />
          </HStack>
        </AppLink>

        <Text text={comment.text} />
      </VStack>
    </Card>
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
})

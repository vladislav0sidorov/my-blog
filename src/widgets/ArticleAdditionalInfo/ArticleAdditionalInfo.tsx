import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { User } from '@/entities/User'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Text } from '@/shared/ui/redesigned/Text'
import { ArticleEditButton } from '@/features/ArticleEditButton'

interface ArticleAdditionalInfoProps {
  className?: string
  author?: User
  createdAt?: string
  views?: number
}

export const ArticleAdditionalInfo: FC<ArticleAdditionalInfoProps> = React.memo((props) => {
  const { className, author, createdAt, views } = props
  const { t } = useTranslation('article-details')

  return (
    <VStack gap="24">
      <HStack gap="8">
        <Avatar src={author?.avatar} size={32} />
        <Text text={author?.username} bold />
      </HStack>
      <ArticleEditButton />
      <VStack gap="8">
        <Text text={t('{{count}} просмотров', { count: views })} />

        <Text text={createdAt} />
      </VStack>
    </VStack>
  )
})

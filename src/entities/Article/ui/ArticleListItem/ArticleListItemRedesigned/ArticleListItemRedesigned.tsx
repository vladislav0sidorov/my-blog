/* eslint-disable i18next/no-literal-string */
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleBlockType, ArticleView } from '../../../model/consts/consts'
import { ArticleTextBlock } from '../../../model/types/article'
import cls from './ArticleListItemRedesigned.module.scss'
import { ArticleListItemProps } from '../ArticleListItem'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import EyeIcon from '@/shared/assets/icons/redesign/eye.svg'
import { getRouteArticleDetails } from '@/shared/const/router'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Text } from '@/shared/ui/redesigned/Text'

export const ArticleListItemRedesigned: FC<ArticleListItemProps> = React.memo((props) => {
  const { className, article, view, target } = props
  const { t } = useTranslation('article-list')

  const types = <Text text={article.type.join(', ')} />
  const views = (
    <HStack gap="8" align="center">
      <Icon Svg={EyeIcon} />
      <Text className={cls.views} text={String(article.views)} />
    </HStack>
  )
  const userInfo = (
    <>
      {article.user.avatar && <Avatar size={32} src={article.user.avatar} className={cls.userInfo} />}
      <Text bold text={article.user.username} />
    </>
  )

  const errorIconFallback = (
    <VStack heightMax justify="center">
      <Text text={t('Нам не удалось загрузить изображение. Попробуйте снова.')} size="s" align="center" />
    </VStack>
  )

  const image = (
    <AppImage
      className={cls.img}
      src={article.img}
      alt={article.title}
      fallback={<Skeleton height="100%" width="100%" />}
      errorFallback={errorIconFallback}
    />
  )

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock

    return (
      <Card
        data-testid="ArticleListItem"
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        padding="24"
        max
      >
        <VStack max gap="16">
          <VStack max gap="8">
            <HStack max gap="8">
              {userInfo}
              <Text size="s" text={article.createdAt} />
            </HStack>
            <Text bold size="l" title={article.title} />
          </VStack>
          <Text bold size="s" title={article.subtitle} />
          {types}
          {image}
          {textBlock?.paragraphs && (
            <Text className={cls.textBlock} text={textBlock.paragraphs.slice(0, 2).join(' ')} />
          )}

          <HStack max gap="8" justify="between">
            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
              <Button variant="outline">{t('Читать далее')}</Button>
            </AppLink>

            {views}
          </HStack>
        </VStack>
      </Card>
    )
  }

  return (
    <AppLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card padding="0" className={cls.card} borderRadius="round">
        {image}
        <VStack className={cls.info} gap="4">
          <Text title={article.title} className={cls.title} />
          <VStack gap="4" className={cls.footer} max>
            <HStack justify="between" max>
              <Text text={article.createdAt} className={cls.date} />
              {views}
            </HStack>
            <HStack gap="4">{userInfo}</HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  )
})

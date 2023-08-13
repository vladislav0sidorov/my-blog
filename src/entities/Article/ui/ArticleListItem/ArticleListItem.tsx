import React, { FC, HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleBlockType, ArticleView } from '../../model/consts/consts'
import { Article, ArticleTextBlock } from '../../model/types/article'
import cls from './ArticleListItem.module.scss'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Text } from '@/shared/ui/Text'
import { Icon } from '@/shared/ui/Icon'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { TextAling, TextSize } from '@/shared/ui/Text/ui/Text'
import { Card } from '@/shared/ui/Card'
import { Avatar } from '@/shared/ui/Avatar'
import { Button, ButtonVariables } from '@/shared/ui/Button'
import { AppLink } from '@/shared/ui/AppLink'
import { getRouteArticleDetails } from '@/shared/const/router'
import { AppImage } from '@/shared/ui/AppImage'
import { Skeleton } from '@/shared/ui/Skeleton'
import { VStack } from '@/shared/ui/Stack'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<ArticleListItemProps> = React.memo((props) => {
  const { className, article, view, target } = props
  const { t } = useTranslation('article-list')

  const types = <Text className={cls.types} text={article.type.join(', ')} />
  const views = (
    <>
      <Text className={cls.views} text={String(article.views)} />
      <Icon Svg={EyeIcon} />
    </>
  )

  const errorIconFallback = (
    <VStack heightMax justify="center">
      <Text
        text={t('Нам неудалось загрузить изображение. Попробуйте снова.')}
        size={TextSize.S}
        aling={TextAling.CENTER}
      />
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
      <div data-testid="ArticleListItem" className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            {article.user.avatar && <Avatar size={30} src={article.user.avatar} />}
            <Text className={cls.username} text={article.user.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text className={cls.title} title={article.title} />
          {types}
          {image}
          {textBlock && <ArticleTextBlockComponent className={cls.textBlock} block={textBlock} />}
          <div className={cls.footer}>
            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
              <Button theme={ButtonVariables.OUTLINE}>{t('Читать далее')}</Button>
            </AppLink>

            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <AppLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          {image}
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text size={TextSize.S} className={cls.title} title={article.title} />
      </Card>
    </AppLink>
  )
})

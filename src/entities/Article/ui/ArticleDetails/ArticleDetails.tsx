/* eslint-disable i18next/no-literal-string */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading'
import cls from './ArticleDetails.module.scss'
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError'
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { renderArticleBlock } from './renderArticleBlock'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned, Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { TextSize } from '@/shared/ui/deprecated/Text'
import { Text as TextDeprecated, TextAling, TextTheme } from '@/shared/ui/deprecated/Text/ui/Text'
import { ToggleFeaturesComponent, toggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { AppImage } from '@/shared/ui/redesigned/AppImage'

interface ArticleDetailsProps {
  className?: string
  id?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

const ArticleSkeleton = () => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  })

  return (
    <VStack gap="16" max>
      <HStack max justify="center">
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
      </HStack>
      <VStack max gap="16">
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </VStack>
    </VStack>
  )
}

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData)

  return (
    <>
      <HStack max justify="center">
        <AvatarDeprecated
          data-testid="ArticleDetailsPage.Avatar"
          className={cls.avatar}
          src={article?.img}
          size={200}
        />
      </HStack>
      <VStack max gap="32">
        <TextDeprecated size={TextSize.L} title={article?.title} text={article?.subtitle} />
        <HStack gap="8">
          <IconDeprecated Svg={EyeIcon} />
          <TextDeprecated text={String(article?.views)} />
        </HStack>
        <HStack gap="8">
          <IconDeprecated Svg={CalendarIcon} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
        {article?.blocks.map(renderArticleBlock)}
      </VStack>
    </>
  )
}

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData)
  const { t } = useTranslation('article-details')

  const errorIconFallback = (
    <VStack heightMax justify="center">
      <Text text={t('Нам не удалось загрузить изображение. Попробуйте снова.')} size="s" align="center" />
    </VStack>
  )

  return (
    <>
      <VStack gap="16">
        <Text size="l" bold title={article?.title} />
        <Text size="l" text={article?.subtitle} />
      </VStack>

      <HStack max justify="center">
        <AppImage
          fallback={<Skeleton />}
          data-testid="ArticleDetailsPage.Avatar"
          className={cls.image}
          src={article?.img}
          errorFallback={errorIconFallback}
        />
      </HStack>
      <VStack max gap="32">
        {article?.blocks.map(renderArticleBlock)}
      </VStack>
    </>
  )
}

export const ArticleDetails: React.FC<ArticleDetailsProps> = React.memo((props) => {
  const { className, id } = props
  const { t } = useTranslation('article-details')
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)

  useInitialEffect(() => {
    dispatch(fetchArticleById(id))
  })

  let content

  if (isLoading) {
    content = <ArticleSkeleton />
  } else if (error) {
    content = (
      <HStack>
        <ToggleFeaturesComponent
          featureName="isAppRedesigned"
          on={<Text align="center" variant="error" title={t('Error')} />}
          off={<TextDeprecated aling={TextAling.CENTER} theme={TextTheme.ERROR} title={t('Error')} />}
        />
      </HStack>
    )
  } else {
    content = <ToggleFeaturesComponent featureName="isAppRedesigned" on={<Redesigned />} off={<Deprecated />} />
  }

  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.ArticleDetailsRedesigned,
    off: () => cls.ArticleDetails,
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack max gap="16" className={classNames(mainClass, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  )
})

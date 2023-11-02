import React from 'react'

import cls from './ArticleImageBlockComponent.module.scss'
import { ArticleImageBlock } from '../../model/types/article'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { TextAling } from '@/shared/ui/deprecated/Text/ui/Text'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent: React.FC<ArticleImageBlockComponentProps> = React.memo((props) => {
  const { className, block } = props

  const deprecatedContent = (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img className={cls.img} src={block.src} alt={block.title} />
      {block.title && <TextDeprecated className={cls.text} aling={TextAling.CENTER} text={block.title} />}
    </div>
  )

  const redesignedContent = (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <VStack align="center" max gap="4">
        <img className={cls.img} src={block.src} alt={block.title} />
        {block.title && <Text className={cls.text} align="center" text={block.title} />}
      </VStack>
    </div>
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
})

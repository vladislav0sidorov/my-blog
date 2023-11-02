import React from 'react'

import { ArticleTextBlock } from '../../model/types/article'
import cls from './ArticleTextBlockComponent.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> = React.memo((props) => {
  const { className, block } = props

  const deprecatedContent = (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && <TextDeprecated className={cls.title} title={block.title} />}
      {block.paragraphs.map((paragraph) => (
        <TextDeprecated className={cls.paragraph} key={paragraph} text={paragraph} />
      ))}
    </div>
  )

  const redesignedContent = (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && <Text className={cls.title} title={block.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text className={cls.paragraph} key={paragraph} text={paragraph} />
      ))}
    </div>
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
})

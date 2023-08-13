import React from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleTextBlock } from '../../model/types/article'
import cls from './ArticleTextBlockComponent.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Text } from '@/shared/ui/Text'

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> = React.memo((props) => {
  const { className, block } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && <Text className={cls.title} title={block.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text className={cls.paragraph} key={paragraph} text={paragraph} />
      ))}
    </div>
  )
})

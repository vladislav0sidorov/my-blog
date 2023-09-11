import React from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleImageBlockComponent.module.scss'
import { ArticleImageBlock } from '../../model/types/article'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Text } from '@/shared/ui/deprecated/Text'
import { TextAling } from '@/shared/ui/deprecated/Text/ui/Text'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent: React.FC<ArticleImageBlockComponentProps> = React.memo((props) => {
  const { className, block } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img className={cls.img} src={block.src} alt={block.title} />
      {block.title && <Text className={cls.text} aling={TextAling.CENTER} text={block.title} />}
    </div>
  )
})

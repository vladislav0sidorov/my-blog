import React from 'react'

import { ArticleCodeBlock } from '../../model/types/article'

import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Code } from '@/shared/ui/redesigned/Code'

// import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> = React.memo((props) => {
  const { className, block } = props

  return (
    <ToggleFeaturesComponent
      featureName="isAppRedesigned"
      on={<Code text={block.code} />}
      off={<CodeDeprecated text={block.code} />}
    />
  )
})

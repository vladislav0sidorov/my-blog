import React from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleCodeBlock } from '../../model/types/article';

import { Code } from '@/shared/ui/Code';
// import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> = React.memo((props) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div>
      <Code text={block.code} />
    </div>
  );
});

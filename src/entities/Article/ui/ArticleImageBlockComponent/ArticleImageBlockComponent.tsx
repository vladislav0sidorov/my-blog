import React from 'react';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { TextAling } from 'shared/ui/Text/ui/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: React.FC<ArticleImageBlockComponentProps> = React.memo((props) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img className={cls.img} src={block.src} alt={block.title} />
      {block.title && <Text className={cls.text} aling={TextAling.CENTER} text={block.title} />}
    </div>
  );
});

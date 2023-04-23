import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { Text } from 'shared/ui/Text';
import { VStack } from 'shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = React.memo((props) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation('comment');

  if (isLoading) {
    return (
      <VStack max gap="16" className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      {comments?.length ? comments.map((comment) => <CommentCard key={comment.id} isLoading={isLoading} comment={comment} />) : <Text text={t('Комментарии отсутствуют')} />}
    </VStack>
  );
});

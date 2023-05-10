import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';
import { HStack, VStack } from 'shared/ui/Stack';
import { AppLink } from 'shared/ui/AppLink';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = React.memo((props) => {
  const { className, comment, isLoading = true } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack max gap="8" className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={cls.username} height={16} width={100} />
        </div>
        <Skeleton width="100%" height={50} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack max gap="8" className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink className={cls.header} to={RoutePath.profile + comment.user.id}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={cls.username} text={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </VStack>
  );
});

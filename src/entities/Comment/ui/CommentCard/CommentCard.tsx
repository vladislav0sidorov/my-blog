import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton';
import { Text } from 'shared/ui/Text';
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
      <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={cls.username} height={16} width={100} />
        </div>
        <Skeleton className={cls.message} width="100%" height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={RoutePath.profile + comment.user.id} className={cls.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={cls.username} text={comment.user.username} />
      </AppLink>
      <Text className={cls.message} text={comment.text} />
    </div>
  );
});

import React from 'react'

import { ArticleView } from '../../model/consts/consts'
import cls from './ArticleListItem.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { toggleFeatures } from '@/shared/lib/features'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton: React.FC<ArticleListItemSkeletonProps> = React.memo((props) => {
  const { className, view } = props

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  })

  const Card = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => CardRedesigned,
    off: () => CardDeprecated,
  })

  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.ArticleListItemRedesigned,
    off: () => cls.ArticleListItem,
  })

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(mainClass, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={70} height={16} className={cls.date} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton height={250} className={cls.img} />
          <div className={cls.footer}>
            <Skeleton width={150} height={36} />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames(mainClass, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div>
          <Skeleton width="100%" height={200} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={cls.title} />
      </Card>
    </div>
  )
})

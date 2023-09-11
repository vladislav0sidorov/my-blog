import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleViewSelector.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { ArticleView } from '@/entities/Article'
import PlateIcon from '@/shared/assets/icons/plate.svg'
import ListIcon from '@/shared/assets/icons/list.svg'
import { Button, ButtonVariables } from '@/shared/ui/deprecated/Button'
import { Icon } from '@/shared/ui/deprecated/Icon'

interface ArticleViewSelectorProps {
  className?: string
  view?: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.PLATE,
    icon: PlateIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
]

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = React.memo((props) => {
  const { className, view, onViewClick } = props
  const { t } = useTranslation()

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
    <div className={classNames(cls.articleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button key={viewType.view} theme={ButtonVariables.CLEAR} onClick={onClick(viewType.view)}>
          <Icon
            inverted
            className={classNames('', { [cls.notSelected]: viewType.view !== view })}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  )
})

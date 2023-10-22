import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ArticleViewSelector.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { ArticleView } from '@/entities/Article'
import PlateIconDeprecated from '@/shared/assets/icons/plate.svg'
import ListIconDeprecated from '@/shared/assets/icons/list.svg'
import PlateIcon from '@/shared/assets/icons/redesign/plate.svg'
import ListIcon from '@/shared/assets/icons/redesign/list.svg'
import { Button as DeprecatedButton, ButtonVariables } from '@/shared/ui/deprecated/Button'
import { Icon as DeprecatedIcon } from '@/shared/ui/deprecated/Icon'
import { ToggleFeaturesComponent, toggleFeatures } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface ArticleViewSelectorProps {
  className?: string
  view?: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.PLATE,
    icon: toggleFeatures({ name: 'isAppRedesigned', on: () => PlateIcon, off: () => PlateIconDeprecated }),
  },
  {
    view: ArticleView.LIST,
    icon: toggleFeatures({ name: 'isAppRedesigned', on: () => ListIcon, off: () => ListIconDeprecated }),
  },
]

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = React.memo((props) => {
  const { className, view, onViewClick } = props
  const { t } = useTranslation()

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  const deprecatedContent = (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <DeprecatedButton key={viewType.view} theme={ButtonVariables.CLEAR} onClick={onClick(viewType.view)}>
          <DeprecatedIcon
            inverted
            className={classNames('', { [cls.notSelected]: viewType.view !== view })}
            Svg={viewType.icon}
          />
        </DeprecatedButton>
      ))}
    </div>
  )

  const redesignedContent = (
    // eslint-disable-next-line i18next/no-literal-string
    <Card className={classNames(cls.ArticleViewSelectorRedesigned, {}, [className])} padding="8" borderRadius="round">
      <HStack gap="16">
        {viewTypes.map((viewType) => (
          <Icon
            key={viewType.view}
            clickable
            className={classNames('', { [cls.notSelected]: viewType.view !== view })}
            onClick={onClick(viewType.view)}
            Svg={viewType.icon}
          />
        ))}
      </HStack>
    </Card>
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
})

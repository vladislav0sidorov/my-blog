import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './StarRating.module.scss'
import StartIcon from '../../../../assets/icons/star.svg'
import { Icon } from '../../Icon'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'

interface StarRatingProps {
  className?: string
  onSelect?: (startCount: number) => void
  size?: number
  selectedStars?: number
  inverted?: boolean
}

const stars = [1, 2, 3, 4, 5]

/**
 * Компонент устарел. Сейчас используем новые из папки redesigned
 * @deprecated
 */

export const StarRating = memo((props: StarRatingProps) => {
  const { className, onSelect, size = 30, selectedStars = 0, inverted } = props
  const { t } = useTranslation()

  const [currentStatusCount, setCurrentStatusCount] = useState(selectedStars)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

  const onHover = (starCount: number) => () => {
    if (!isSelected) {
      setCurrentStatusCount(starCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStatusCount(0)
    }
  }

  const onClick = (starCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starCount)
      setIsSelected(true)
      setCurrentStatusCount(starCount)
    }
  }

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave}
          inverted={inverted}
          key={starNumber}
          className={classNames(cls.starIcon, { [cls.selected]: isSelected }, [
            currentStatusCount >= starNumber ? cls.hovered : cls.normal,
          ])}
          height={size}
          width={size}
          Svg={StartIcon}
          onClick={onClick(starNumber)}
          data-testid={`ArticleDetailsPage.RatingCart.${starNumber}`}
          data-selected={currentStatusCount >= starNumber}
        />
      ))}
    </div>
  )
})

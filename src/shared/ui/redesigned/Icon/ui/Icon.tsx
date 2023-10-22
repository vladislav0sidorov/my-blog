import React, { memo } from 'react'

import cls from './Icon.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

interface IconBaseProps extends SvgProps {
  className?: string
  width?: number
  height?: number
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false
}

interface ClickableBaseProps extends IconBaseProps {
  clickable: true
  onClick: () => void
}

type IconProps = NonClickableIconProps | ClickableBaseProps

export const Icon = memo((props: IconProps) => {
  const { className, Svg, width = 20, height = 20, clickable, ...otherProps } = props

  const icon = (
    <Svg
      className={classNames(cls.Icon, {}, [className])}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  )

  if (clickable) {
    return (
      <button type="button" className={cls.button} onClick={props.onClick} style={{ height, width }}>
        {icon}
      </button>
    )
  }

  return icon
})

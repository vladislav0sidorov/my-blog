import { useTranslation } from 'react-i18next'
import { memo } from 'react'

import cls from './AppLogo.module.scss'
import { HStack } from '../../Stack'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import AppSvgLogo from '@/shared/assets/icons/app-logo.svg'

interface AppLogoProps {
  className?: string
  size?: number
  color?: string
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className, size = 50, color = 'black' } = props
  const { t } = useTranslation()

  return (
    <HStack max justify="center" className={classNames(cls.AppLogo, {}, [className])}>
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppSvgLogo width={size} height={size} color={color} className={cls.appSvgLogo} />
    </HStack>
  )
})

import { memo, useCallback } from 'react'

import { Theme, useTheme } from '@/app/providers/ThemeProvider'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import LightIconDeprecated from '@/shared/assets/icons/white.svg'
import DarkIconDeprecated from '@/shared/assets/icons/orange.svg'
import ThemeSwitcherIcon from '@/shared/assets/icons/redesign/theme-switcher.svg'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { saveJsonSettings } from '@/entities/User'
import { Button as ButtonDeprecated, ButtonVariables } from '@/shared/ui/deprecated/Button'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { Button } from '@/shared/ui/redesigned/Button'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo((props) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()
  const dispatch = useAppDispatch()

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme: Theme) => {
      dispatch(saveJsonSettings({ theme: newTheme }))
    })
  }, [dispatch, toggleTheme])

  const deprecatedContent = (
    <ButtonDeprecated
      theme={ButtonVariables.CLEAR_THIRD}
      onClick={onToggleHandler}
      className={classNames('', {}, [className])}
    >
      <IconDeprecated height={24} width={24} Svg={theme === Theme.DARK ? DarkIconDeprecated : LightIconDeprecated} />
    </ButtonDeprecated>
  )

  const redesignedContent = (
    <Button variant="clear" onClick={onToggleHandler} className={classNames('', {}, [className])}>
      <Icon Svg={ThemeSwitcherIcon} />
    </Button>
  )

  return <ToggleFeaturesComponent featureName="isAppRedesigned" on={redesignedContent} off={deprecatedContent} />
})

import { memo, useCallback } from 'react'

import { Theme, useTheme } from '@/app/providers/ThemeProvider'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import LightIcon from '@/shared/assets/icons/white.svg'
import DarkIcon from '@/shared/assets/icons/orange.svg'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { saveJsonSettings } from '@/entities/User'
import { Button, ButtonVariables } from '@/shared/ui/deprecated/Button'
import { Icon } from '@/shared/ui/deprecated/Icon'

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

  return (
    <Button theme={ButtonVariables.CLEAR_THIRD} onClick={onToggleHandler} className={classNames('', {}, [className])}>
      <Icon height={24} width={24} Svg={theme === Theme.DARK ? DarkIcon : LightIcon} />
    </Button>
  )
})

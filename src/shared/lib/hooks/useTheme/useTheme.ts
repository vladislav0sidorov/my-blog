import { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeContext'

import { Theme } from '@/shared/const/theme'

interface UseThemeResult {
  toggleTheme: (saveAction: (theme: Theme) => void) => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (saveAction: (theme: Theme) => void) => {
    let newTheme: Theme
    switch (theme) {
      case Theme.LIGHT:
        newTheme = Theme.DARK
        break
      case Theme.DARK:
        newTheme = Theme.PURPLE
        break
      case Theme.PURPLE:
        newTheme = Theme.DARK_GREEN
        break
      case Theme.DARK_GREEN:
        newTheme = Theme.LIGHT
        break
      default:
        newTheme = Theme.LIGHT
    }

    setTheme?.(newTheme)
    saveAction?.(newTheme)
  }
  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  }
}

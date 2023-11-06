import { useMemo, useState, ReactNode, useEffect } from 'react'

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext'

import { Theme } from '@/shared/const/theme'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/lodalStorage'

interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: Theme
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

const ThemeProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props
  const [isThemeInited, setIsThemeInited] = useState(false)

  const [theme, setTheme] = useState<Theme>(initialTheme || fallbackTheme || Theme.LIGHT)

  useEffect(() => {
    if (!isThemeInited && initialTheme) {
      setTheme(initialTheme)
      setIsThemeInited(true)
    }
  }, [initialTheme, isThemeInited])

  useEffect(() => {
    document.body.className = theme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
  }, [theme])

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  )

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider

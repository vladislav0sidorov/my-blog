import { useMemo, useState, ReactNode, useEffect } from 'react'

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext'

import { Theme } from '@/shared/const/theme'
import { useJsonUserSettings } from '@/entities/User'

interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: Theme
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props
  const { theme: defaultTheme = Theme.LIGHT } = useJsonUserSettings()
  const [isThemeInited, setIsThemeInited] = useState(false)

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  useEffect(() => {
    if (!isThemeInited) {
      setTheme(defaultTheme)
      setIsThemeInited(true)
    }
  }, [defaultTheme, isThemeInited])

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

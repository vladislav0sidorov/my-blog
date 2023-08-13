import { useMemo, useState, ReactNode } from 'react'

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext'

import { Theme } from '@/shared/const/theme'
import { LOCAL_STORAGE_ITEM_KEY } from '@/shared/const/lodalStorage'

const defaulTheme = (localStorage.getItem(LOCAL_STORAGE_ITEM_KEY) as Theme) || Theme.LIGHT

interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: Theme
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props
  const [theme, setTheme] = useState<Theme>(initialTheme || defaulTheme)

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

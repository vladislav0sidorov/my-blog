import React from 'react'

import ThemeProvider from './ThemeProvider'

import { useJsonUserSettings } from '@/entities/User'

export const withTheme = (Component: React.ComponentType) => () => {
  const { theme: defaultTheme } = useJsonUserSettings()
  return (
    <ThemeProvider initialTheme={defaultTheme}>
      <Component />
    </ThemeProvider>
  )
}

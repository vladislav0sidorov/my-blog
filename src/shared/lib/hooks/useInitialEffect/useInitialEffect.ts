import React from 'react'

export function useInitialEffect(callback: () => void) {
  React.useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      callback()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

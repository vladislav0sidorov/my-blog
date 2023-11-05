import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { useTheme } from '@/app/providers/ThemeProvider'
import { AppRouter } from '@/app/providers/router'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { getUserInited, initAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ToggleFeaturesComponent } from '@/shared/lib/features'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout'
import { PageLoader } from '@/widgets/PageLoader'

function App() {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)
  const { t } = useTranslation()

  React.useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch])

  let deprecatedContent = (
    <React.Suspense fallback="">
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </React.Suspense>
  )

  let redesignedContent = (
    <React.Suspense fallback="">
      <MainLayout header={<Navbar />} sidebar={<Sidebar />} content={<AppRouter />} toolbar={t('Toolbar')} />
    </React.Suspense>
  )

  if (!inited) {
    deprecatedContent = (
      <div id="app" className={classNames('app', {}, [theme])}>
        <PageLoader />
      </div>
    )

    redesignedContent = (
      <div id="app" className={classNames('app_redesigned', {}, [theme])}>
        <AppLoaderLayout />
      </div>
    )
  }

  return (
    <ToggleFeaturesComponent
      featureName="isAppRedesigned"
      on={<div className={classNames('app_redesigned', {}, [theme])}>{redesignedContent}</div>}
      off={<div className={classNames('app', {}, [theme])}>{deprecatedContent}</div>}
    />
  )
}

export default App

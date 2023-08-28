import React from 'react'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { useTheme } from '@/app/providers/ThemeProvider'
import { AppRouter } from '@/app/providers/router'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { getUserInited, initAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { PageLoader } from '@/widgets/PageLoader'

function App() {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)

  //* Есть баг в этом участке, следует разобраться
  // const inited = useSelector(getUserInited);

  React.useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch])

  let content = (
    <React.Suspense fallback="">
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </React.Suspense>
  )

  if (!inited) {
    content = (
      <div className={classNames('app', {}, [theme])}>
        <PageLoader />
      </div>
    )
  }

  return <div className={classNames('app', {}, [theme])}>{content}</div>
}

export default App

import { FC, ReactNode } from 'react'

import cls from './MainLayout.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'

interface MainLayoutProps {
  className?: string
  header: ReactNode
  sidebar: ReactNode
  toolbar: ReactNode
  content: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = (props) => {
  const { className, sidebar, header, content, toolbar } = props

  return (
    <main className={classNames(cls.MainLayout, {}, [className])}>
      <aside className={cls.sidebar}>{sidebar}</aside>
      <section className={cls.content}>{content}</section>
      <aside className={cls.rightbar}>
        <header className={cls.header}>{header}</header>
        <section className={cls.toolbar}>{toolbar}</section>
      </aside>
    </main>
  )
}

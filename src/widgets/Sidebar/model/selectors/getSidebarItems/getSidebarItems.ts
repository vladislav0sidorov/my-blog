import { createSelector } from '@reduxjs/toolkit'

import { SidebarItemType } from '../../types/sidebar'

import { getUserAuthData } from '@/entities/User'
import AboutIconDeprecated from '@/shared/assets/icons/about.svg'
import HomeIconDeprecated from '@/shared/assets/icons/home.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg'
import ArticlesIconDeprecated from '@/shared/assets/icons/article.svg'
import AboutIcon from '@/shared/assets/icons/redesign/info.svg'
import HomeIcon from '@/shared/assets/icons/redesign/home.svg'
import ProfileIcon from '@/shared/assets/icons/redesign/avatar.svg'
import ArticlesIcon from '@/shared/assets/icons/redesign/article.svg'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router'
import { toggleFeatures } from '@/shared/lib/features'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        on: () => HomeIcon,
        off: () => HomeIconDeprecated,
      }),
      text: 'Главная',
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        on: () => AboutIcon,
        off: () => AboutIconDeprecated,
      }),
      text: 'О себе',
    },
  ]

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => ProfileIcon,
          off: () => ProfileIconDeprecated,
        }),
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => ArticlesIcon,
          off: () => ArticlesIconDeprecated,
        }),
        text: 'Статьи',
        authOnly: true,
      },
    )
  }
  return sidebarItemsList
})

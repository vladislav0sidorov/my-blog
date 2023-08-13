import { createSelector } from '@reduxjs/toolkit'

import { getArticleDetailsData } from '@/entities/Article'
import { getUserAuthData } from '@/entities/User'

export const getCanEditArticle = createSelector(getArticleDetailsData, getUserAuthData, (article, userData) => {
  if (!article || !userData) {
    return false
  }
  return article.user.id === userData.id
})

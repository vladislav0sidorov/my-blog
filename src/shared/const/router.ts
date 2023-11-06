export enum AppRoutes {
  MAIN = 'home',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN_PAGE = 'forbidden_page',
  // last
  PROFILE = 'profile',
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteArticleCreate = () => '/articles/new-article'
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`
export const getRouteAdminPanel = () => '/admin'
export const getRouteForbidden = () => '/forbidden-page'

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteAbout()]: AppRoutes.ABOUT,
  [getRouteProfile(':id')]: AppRoutes.PROFILE,
  [getRouteArticles()]: AppRoutes.ARTICLES,
  [getRouteArticleDetails(':id')]: AppRoutes.ARTICLE_DETAILS,
  [getRouteArticleCreate()]: AppRoutes.ARTICLE_CREATE,
  [getRouteArticleEdit(':id')]: AppRoutes.ARTICLE_EDIT,
  [getRouteAdminPanel()]: AppRoutes.ADMIN_PANEL,
}

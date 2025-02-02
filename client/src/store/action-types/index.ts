export enum ActionType {
  // THEME
  setTheme = 'SET_THEME',
  // CONFIG
  getConfig = 'GET_CONFIG',
  updateConfig = 'UPDATE_CONFIG',
  // QUERIES
  addQuery = 'ADD_QUERY',
  deleteQuery = 'DELETE_QUERY',
  fetchQueries = 'FETCH_QUERIES',
  updateQuery = 'UPDATE_QUERY',
  // NOTIFICATIONS
  createNotification = 'CREATE_NOTIFICATION',
  clearNotification = 'CLEAR_NOTIFICATION',
  // APPS
  getApps = 'GET_APPS',
  getAppsSuccess = 'GET_APPS_SUCCESS',
  getAppsError = 'GET_APPS_ERROR',
  pinApp = 'PIN_APP',
  addApp = 'ADD_APP',
  addAppSuccess = 'ADD_APP_SUCCESS',
  deleteApp = 'DELETE_APP',
  updateApp = 'UPDATE_APP',
  reorderApps = 'REORDER_APPS',
  sortApps = 'SORT_APPS',
  setEditApp = 'SET_EDIT_APP',
  // CATEGORES
  getCategories = 'GET_CATEGORIES',
  getCategoriesSuccess = 'GET_CATEGORIES_SUCCESS',
  getCategoriesError = 'GET_CATEGORIES_ERROR',
  addCategory = 'ADD_CATEGORY',
  pinCategory = 'PIN_CATEGORY',
  deleteCategory = 'DELETE_CATEGORY',
  updateCategory = 'UPDATE_CATEGORY',
  sortCategories = 'SORT_CATEGORIES',
  reorderCategories = 'REORDER_CATEGORIES',
  setEditCategory = 'SET_EDIT_CATEGORY',
  // BOOKMARKS
  addBookmark = 'ADD_BOOKMARK',
  deleteBookmark = 'DELETE_BOOKMARK',
  updateBookmark = 'UPDATE_BOOKMARK',
  setEditBookmark = 'SET_EDIT_BOOKMARK',
  reorderBookmarks = 'REORDER_BOOKMARKS',
  sortBookmarks = 'SORT_BOOKMARKS',
  // AUTH
  login = 'LOGIN',
  logout = 'LOGOUT',
  autoLogin = 'AUTO_LOGIN',
  authError = 'AUTH_ERROR',
}

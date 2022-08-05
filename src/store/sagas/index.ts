import { all, takeLatest } from 'redux-saga/effects'

import { AuthActions } from '../ducks/authSlice'
import { UserActions } from '../ducks/userSlice'
import { HistoryActions } from '../ducks/historySlice'
import { BannerActions } from '../ducks/bannerSlice'
import { CategoryActions } from '../ducks/categorySlice'
import { StoreActions } from '../ducks/storeSlice'
import { FavoriteActions } from '../ducks/favoriteSlice'

import { refreshToken } from './auth'
import { getNotifications, saveFcmToken } from './user'
import { addStoreToHistory, getHistory } from './history'
import { getBanners } from './banners'
import { getCategories, getMainCategories } from './category'
import {
  getStores,
  requestSearchStores,
  getStoreDetails,
  updateScore,
} from './store'
import {
  requestAddFavorite,
  requestRemoveFavorite,
  getFavorites,
  requestUpdateNotitificationStatus,
} from './favorite'

export function* rootSaga(): Generator {
  return yield all([
    takeLatest(AuthActions.refreshToken.type, refreshToken),
    takeLatest(UserActions.saveFcmToken.type, saveFcmToken),
    takeLatest(UserActions.getNotifications.type, getNotifications),
    takeLatest(HistoryActions.addStoreToHistory.type, addStoreToHistory),
    takeLatest(HistoryActions.getHistory.type, getHistory),
    takeLatest(BannerActions.getBanners.type, getBanners),
    takeLatest(CategoryActions.getCategories.type, getCategories),
    takeLatest(CategoryActions.getMainCategories.type, getMainCategories),
    takeLatest(StoreActions.getStores.type, getStores),
    takeLatest(StoreActions.requestSearchStores.type, requestSearchStores),
    takeLatest(StoreActions.getStoreDetails.type, getStoreDetails),
    takeLatest(StoreActions.updateScore.type, updateScore),
    takeLatest(FavoriteActions.requestAddFavorite.type, requestAddFavorite),
    takeLatest(
      FavoriteActions.requestRemoveFavorite.type,
      requestRemoveFavorite
    ),
    takeLatest(FavoriteActions.getFavorites.type, getFavorites),
    takeLatest(
      FavoriteActions.requestUpdateNotitificationStatus.type,
      requestUpdateNotitificationStatus
    ),
  ])
}

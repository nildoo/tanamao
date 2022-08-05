import { call, put } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import api from '../../services/api'

import {
  AddOrRemoveFavoriteType,
  GetFavoritesType,
  UpdateNotitificationStatusType,
} from '../../types/Favorite'

import { FavoriteActions } from '../ducks/favoriteSlice'

import { toast } from '../../helpers/toast'

export function* requestAddFavorite(
  action: PayloadAction<AddOrRemoveFavoriteType>
) {
  const { userId, favoriteId, type } = action.payload

  try {
    yield call(
      api.patch,
      `/users/favorite/${userId}?favoriteId=${favoriteId}&type=${type}`
    )
    yield put(FavoriteActions.successAddFavorite({ favoriteId }))
  } catch (error) {
    return toast.danger({
      message: `Falha ao favoritar ${
        type === 'category'
          ? 'categoria'
          : type === 'subcategory'
          ? 'subcategoria'
          : 'lugar'
      }!`,
      type: 'danger',
    })
  }
}

export function* requestRemoveFavorite(
  action: PayloadAction<AddOrRemoveFavoriteType>
) {
  const { userId, favoriteId, type } = action.payload

  try {
    yield call(
      api.delete,
      `/users/favorite/${userId}?favoriteId=${favoriteId}&type=${type}`
    )
    yield put(FavoriteActions.successRemoveFavorite({ favoriteId }))
  } catch (error) {
    return toast.danger({
      message: 'Falha ao remover favorito!',
      type: 'danger',
    })
  }
}

export function* getFavorites(action: PayloadAction<GetFavoritesType>) {
  const { userId, type } = action.payload

  try {
    const response: {
      data: { [key: string]: any; notificationEnabled: boolean }[]
      status: number
    } = yield call(api.get, `/users/favorites/${userId}?type=${type}`)

    if (response.status === 200) {
      const payload = response.data.map((item) => ({
        ...item,
        favorite: item[type],
      }))

      yield put(FavoriteActions.setFavorites(payload))
    }
  } catch (error) {
    return toast.danger({
      message: 'Falha ao buscar favoritos!',
      type: 'danger',
    })
  }
}

export function* requestUpdateNotitificationStatus(
  action: PayloadAction<UpdateNotitificationStatusType>
) {
  const { userId, type, favoriteId, status } = action.payload

  try {
    yield call(
      api.patch,
      `/users/favorite/notification/${userId}?type=${type}&favoriteId=${favoriteId}&notificationStatus=${status}`
    )
    yield put(
      FavoriteActions.successUpdateNotitificationStatus({ favoriteId, status })
    )
  } catch (error) {
    return toast.danger({
      message: 'Falha ao atualizar status de notificação!',
      type: 'danger',
    })
  }
}

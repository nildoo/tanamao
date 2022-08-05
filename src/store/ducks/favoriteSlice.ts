import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthActions } from './authSlice'

import {
  FavoriteType,
  AddOrRemoveFavoriteType,
  GetFavoritesType,
  UpdateNotitificationStatusType,
} from '../../types/Favorite'

import { RootState } from '../index'

const initialState: {
  list: FavoriteType[]
  listIds: string[]
  loading: boolean
} = {
  list: [],
  listIds: [],
  loading: false,
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    requestAddFavorite: (
      _,
      action: PayloadAction<AddOrRemoveFavoriteType>
    ) => {},
    successAddFavorite: (
      state,
      action: PayloadAction<{ favoriteId: string }>
    ) => {
      return {
        ...state,
        listIds: [...state.listIds, action.payload.favoriteId],
      }
    },
    requestRemoveFavorite: (
      _,
      action: PayloadAction<AddOrRemoveFavoriteType>
    ) => {},
    successRemoveFavorite: (
      state,
      action: PayloadAction<{ favoriteId: string }>
    ) => {
      return {
        ...state,
        list: state.list.filter(
          (item) => item.favorite._id !== action.payload.favoriteId
        ),
        listIds: state.listIds.filter(
          (item) => item !== action.payload.favoriteId
        ),
      }
    },
    getFavorites: (state, action: PayloadAction<GetFavoritesType>) => {
      return {
        ...state,
        list: initialState.list,
        listIds: initialState.listIds,
        loading: true,
      }
    },
    setFavorites: (state, action: PayloadAction<FavoriteType[]>) => {
      const ids = action.payload.map((item) => item.favorite._id)

      return { ...state, list: action.payload, listIds: ids, loading: false }
    },
    requestUpdateNotitificationStatus: (
      _,
      action: PayloadAction<UpdateNotitificationStatusType>
    ) => {},
    successUpdateNotitificationStatus: (
      state,
      action: PayloadAction<{ favoriteId: string; status: boolean }>
    ) => {
      const { favoriteId, status } = action.payload
      const newList = state.list.map((item) => {
        if (item.favorite._id === favoriteId) {
          return { ...item, notificationEnabled: status }
        }

        return item
      })

      return { ...state, list: newList }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AuthActions.logout, (state) => {
      return { ...state, ...initialState }
    })
  },
})

export const selectFavorite = (state: RootState) => state.favorite
export const FavoriteActions = favoriteSlice.actions

export default favoriteSlice.reducer

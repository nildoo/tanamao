import React, { memo, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { useAppDispatch, useAppSelector } from '../hooks/store'
import { selectSocialCredentials } from '../store/ducks/authSlice'
import { FavoriteActions, selectFavorite } from '../store/ducks/favoriteSlice'

import { BasicHeader } from '../components/Headers'
import { Loading } from '../components/Loading'
import FavoritesComponent from '../components/Favorites'
import { EmptyData } from '../components/EmptyData'

const Favorites = () => {
  const { type }: any = useRoute().params,
    dispatch = useAppDispatch(),
    navigation = useNavigation(),
    socialCredentials = useAppSelector(selectSocialCredentials),
    favorite = useAppSelector(selectFavorite),
    favorites = favorite.list,
    loading = favorite.loading

  useEffect(() => {
    if (socialCredentials.userId) {
      dispatch(
        FavoriteActions.getFavorites({
          userId: socialCredentials.userId,
          type,
        })
      )
    }
  }, [socialCredentials.userId])

  return (
    <>
      <BasicHeader />
      {loading ? (
        <Loading />
      ) : favorites.length ? (
        <FavoritesComponent
          favorites={favorites}
          type={type}
          goToStore={(id) => navigation.navigate('Store' as never, id as never)}
          updateNotificationStatus={({ favoriteId, status }) =>
            dispatch(
              FavoriteActions.requestUpdateNotitificationStatus({
                userId: socialCredentials.userId,
                type,
                favoriteId,
                status,
              })
            )
          }
          removeFavorite={(id) =>
            dispatch(
              FavoriteActions.requestRemoveFavorite({
                userId: socialCredentials.userId,
                favoriteId: id,
                type,
              })
            )
          }
        />
      ) : (
        <EmptyData />
      )}
    </>
  )
}

export default memo(Favorites)

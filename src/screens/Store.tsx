import React, { memo, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Geolocation from 'react-native-geolocation-service'

import {
  getDistanceBetweenUserAndStore,
  getLatAndLongFromAddress,
} from '../services/maps'

import { openDeviceApp } from '../helpers/openDeviceApp'
import { requestPermissions } from '../helpers/permissions'

import { useAppDispatch, useAppSelector } from '../hooks/store'
import { selectSocialCredentials } from '../store/ducks/authSlice'
import { StoreActions, selectStore } from '../store/ducks/storeSlice'
import { HistoryActions, selectHistory } from '../store/ducks/historySlice'
import { FavoriteActions, selectFavorite } from '../store/ducks/favoriteSlice'

import { Loading } from '../components/Loading'
import { BasicHeader } from '../components/Headers'
import StoreComponent from '../components/Store'
import { WhatsAppButton } from '../components/WhatsApp'
import { RegionType } from '../types/Region'

const Store = () => {
  const idParam = useRoute().params,
    id = idParam && idParam.toString(),
    dispatch = useAppDispatch(),
    navigation = useNavigation(),
    socialCredentials = useAppSelector(selectSocialCredentials),
    store = useAppSelector(selectStore),
    allHistory = useAppSelector(selectHistory),
    favorite = useAppSelector(selectFavorite),
    storeDetails = store.details,
    history = allHistory.list,
    favoriteIds = favorite.listIds,
    storeLoading = store.loading,
    historyLoading = allHistory.loading,
    favoriteLoading = favorite.loading,
    storesId = history.map((item) => item._id),
    storeExistsInHistory = id && storesId.includes(id),
    [distance, setDistance] = useState(undefined),
    [userRegion, setUserRegion] = useState<RegionType | undefined>(undefined),
    [region, setRegion] = useState<RegionType | undefined>(undefined)

  useEffect(() => {
    if (id) {
      dispatch(StoreActions.getStoreDetails({ id }))
      dispatch(StoreActions.updateScore({ id }))
    }

    if (socialCredentials.userId) {
      dispatch(
        FavoriteActions.getFavorites({
          userId: socialCredentials.userId,
          type: 'store',
        })
      )

      if (id && !storeExistsInHistory) {
        dispatch(
          HistoryActions.addStoreToHistory({
            userId: socialCredentials.userId,
            storeId: id,
          })
        )
      }
    }
  }, [id, socialCredentials.userId])

  useEffect(() => {
    storeDetails.premium && storeDetails.placeIdMaps?.length
      ? (async () =>
          setRegion(
            await getLatAndLongFromAddress({
              placeId: storeDetails.placeIdMaps || '',
            })
          ))()
      : setRegion(undefined)
  }, [storeDetails.placeIdMaps])

  useEffect(() => {
    requestPermissions().then((permissionGranted) => {
      if (permissionGranted && region) {
        Geolocation.getCurrentPosition(async ({ coords }) => {
          setUserRegion({ lat: coords.latitude, lng: coords.longitude })
          setDistance(
            await getDistanceBetweenUserAndStore({
              origin: { lat: coords.latitude, lng: coords.longitude },
              destination: { lat: region.lat, lng: region.lng },
            })
          )
        })
      }
    })
  }, [])

  return (
    <>
      <BasicHeader />
      {storeLoading || historyLoading || favoriteLoading ? (
        <Loading />
      ) : (
        <>
          <StoreComponent
            store={{ ...storeDetails, distance, userRegion, region }}
            logged={!!socialCredentials.userId}
            addFavorite={() =>
              dispatch(
                FavoriteActions.requestAddFavorite({
                  userId: socialCredentials.userId,
                  favoriteId: id || '',
                  type: 'store',
                })
              )
            }
            removeFavorite={(id) =>
              dispatch(
                FavoriteActions.requestRemoveFavorite({
                  userId: socialCredentials.userId,
                  favoriteId: id,
                  type: 'store',
                })
              )
            }
            goToLogin={() => navigation.navigate('Login' as never)}
            favorited={favoriteIds.includes(id || '')}
          />
          {storeDetails.premium ? (
            <WhatsAppButton
              onPress={() =>
                storeDetails.cellphone
                  ? openDeviceApp.whatsapp(storeDetails.cellphone)
                  : null
              }
            />
          ) : null}
        </>
      )}
    </>
  )
}

export default memo(Store)

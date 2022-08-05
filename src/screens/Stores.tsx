import React, { memo, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { useAppDispatch, useAppSelector } from '../hooks/store'
import { selectSocialCredentials } from '../store/ducks/authSlice'
import { HistoryActions, selectHistory } from '../store/ducks/historySlice'
import { StoreActions, selectStore } from '../store/ducks/storeSlice'

import { Loading } from '../components/Loading'
import { BasicHeader } from '../components/Headers'
import StoresComponent from '../components/Stores'

const Stores = () => {
  const { isHistory, subcategoryId }: any = useRoute().params,
    dispatch = useAppDispatch(),
    navigation = useNavigation(),
    socialCredentials = useAppSelector(selectSocialCredentials),
    allHistory = useAppSelector(selectHistory),
    store = useAppSelector(selectStore),
    history = allHistory.list,
    stores = store.list,
    historyLoading = allHistory.loading,
    storeLoading = store.loading

  useEffect(() => {
    if (isHistory && socialCredentials.userId) {
      dispatch(
        HistoryActions.getHistory({
          userId: socialCredentials.userId,
          all: true,
        })
      )
    }
  }, [isHistory, socialCredentials.userId])

  useEffect(() => {
    subcategoryId && dispatch(StoreActions.getStores({ subcategoryId }))
  }, [subcategoryId])

  return (
    <>
      <BasicHeader />
      {historyLoading || storeLoading ? (
        <Loading />
      ) : (
        <StoresComponent
          stores={isHistory ? history : stores}
          goToStore={(id) => navigation.navigate('Store' as never, id as never)}
        />
      )}
    </>
  )
}

export default memo(Stores)

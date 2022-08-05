import React, { memo, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { useAppDispatch, useAppSelector } from '../hooks/store'
import { selectStore, StoreActions } from '../store/ducks/storeSlice'

import { UserHeader } from '../components/Headers'
import { SearchInput } from '../components/SearchInput'
import { Loading } from '../components/Loading'
import StoresComponent from '../components/Stores'

const Search = () => {
  const dispatch = useAppDispatch(),
    navigation = useNavigation(),
    store = useAppSelector(selectStore),
    stores = store.list,
    storeLoading = store.loading,
    [keyword, setKeyword] = useState('')

  useEffect(() => {
    if (keyword) {
      setTimeout(() => {
        dispatch(StoreActions.requestSearchStores({ keyword }))
      }, 500)
    }
  }, [keyword])

  return (
    <>
      <UserHeader />
      <SearchInput setKeyword={setKeyword} />
      {storeLoading ? (
        <Loading />
      ) : (
        <StoresComponent
          stores={stores}
          goToStore={(id) => navigation.navigate(`Store` as never, id as never)}
        />
      )}
    </>
  )
}

export default memo(Search)

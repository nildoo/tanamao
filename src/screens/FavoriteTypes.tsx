import React, { memo } from 'react'

import { useAppSelector } from '../hooks/store'
import { selectSocialCredentials } from '../store/ducks/authSlice'

import LoginScreen from './Login'
import { UserHeader } from '../components/Headers'
import FavoriteTypesComponent from '../components/FavoriteTypes'
import { useNavigation } from '@react-navigation/native'

const FavoriteTypes = () => {
  const navigation = useNavigation(),
    socialCredentials = useAppSelector(selectSocialCredentials)

  return socialCredentials.userId ? (
    <>
      <UserHeader />
      <FavoriteTypesComponent
        goToFavorites={(type) =>
          navigation.navigate('Favorites' as never, { type } as never)
        }
      />
    </>
  ) : (
    <LoginScreen />
  )
}

export default memo(FavoriteTypes)

import AsyncStorage from '@react-native-async-storage/async-storage'

import { SocialCredentialsType } from '../types/Auth'
import { useStorageType, useStoragedDataType } from '../types/Hooks'

import { store } from '../store'
import { AuthActions } from '../store/ducks/authSlice'

export const useStorage = ({ key, payload }: useStorageType) => {
  AsyncStorage.setItem(key, JSON.stringify(payload))
}

export const useStoragedData = async ({ key }: useStoragedDataType) => {
  const data = await AsyncStorage.getItem(key)

  return data && JSON.parse(data)
}

export const useStoragedSocialCredentials = async () => {
  const storagedSocialCredentials = await AsyncStorage.getItem(
    'socialCredentials'
  )
  const socialCredentials: SocialCredentialsType =
    storagedSocialCredentials && JSON.parse(storagedSocialCredentials)

  socialCredentials?.token &&
    store.dispatch(AuthActions.successLogin(socialCredentials))
}

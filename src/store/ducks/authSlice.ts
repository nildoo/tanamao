import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { SocialCredentialsType } from '../../types/Auth'

import { RootState } from '../index'

import { setTokenAPI, removeTokenAPI } from '../../services/api'
import { useStorage } from '../../hooks/storage'

const initialState: SocialCredentialsType = {
  userId: '',
  username: '',
  profilePicture: '',
  token: '',
  refreshToken: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    successLogin: (state, action: PayloadAction<SocialCredentialsType>) => {
      const socialCredentials = action.payload

      setTokenAPI({ token: socialCredentials.token })
      useStorage({ key: 'socialCredentials', payload: socialCredentials })

      return { ...state, ...socialCredentials }
    },
    refreshToken: (state, action: PayloadAction<SocialCredentialsType>) => {
      return { ...state, ...initialState }
    },
    logout: (state) => {
      removeTokenAPI()

      AsyncStorage.removeItem('socialCredentials')

      return { ...state, ...initialState }
    },
  },
})

export const selectSocialCredentials = (state: RootState) => state.auth
export const AuthActions = authSlice.actions

export default authSlice.reducer

import { call, put } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import api from '../../services/api'

import { SocialCredentialsType } from '../../types/Auth'

import { AuthActions } from '../ducks/authSlice'

import { toast } from '../../helpers/toast'

export function* refreshToken(action: PayloadAction<SocialCredentialsType>) {
  try {
    const { userId, refreshToken } = action.payload
    const response: {
      data: {
        accessToken: string
        refreshToken: string
      }
    } = yield call(
      api.post,
      `/users/refresh?userId=${userId}&refreshToken=${refreshToken}`
    )
    const payload = response.data

    if (payload.accessToken && payload.refreshToken) {
      yield put(
        AuthActions.successLogin({
          ...action.payload,
          token: payload.accessToken,
          refreshToken: payload.refreshToken,
        })
      )
    } else {
      yield put(AuthActions.logout())

      return toast.danger({
        message: 'Algo deu errado, você foi desconectado por segurança!',
        type: 'danger',
      })
    }
  } catch (error) {
    yield put(AuthActions.logout())

    return toast.danger({
      message: 'Algo deu errado, você foi desconectado por segurança!',
      type: 'danger',
    })
  }
}

import { call, put } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import { SaveFcmTokenType, NotificationType } from '../../types/User'

import api from '../../services/api'
import { toast } from '../../helpers/toast'

import { UserActions } from '../ducks/userSlice'

export function* saveFcmToken(action: PayloadAction<SaveFcmTokenType>) {
  const { userId, token } = action.payload

  try {
    yield call(api.patch, `/users/fcm/${userId}?fcmToken=${token}`)
  } catch (error: any) {
    return toast.danger({
      message: 'Falha ao salvar identificador de notificação!',
      type: 'danger',
    })
  }
}

export function* getNotifications(action: PayloadAction<{ id: string }>) {
  try {
    const response: { data: NotificationType[]; status: number } = yield call(
      api.get,
      `/users/notifications/${action.payload.id}`
    )
    const payload = response.data

    if (response.status === 200) {
      yield put(UserActions.setNotifications(payload))
    }
  } catch (error: any) {
    return toast.danger({
      message: 'Falha ao buscar notificações!',
      type: 'danger',
    })
  }
}

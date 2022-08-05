import { call, put } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import api from '../../services/api'

import { AddStoreToHistoryType, GetHistoryType } from '../../types/History'
import { StoreType } from '../../types/Store'

import { HistoryActions } from '../ducks/historySlice'

import { toast } from '../../helpers/toast'

export function* addStoreToHistory(
  action: PayloadAction<AddStoreToHistoryType>
) {
  try {
    const { userId, storeId } = action.payload
    yield call(api.patch, `/users/lastseen/${userId}?store=${storeId}`)
  } catch (error) {
    return toast.danger({
      message: 'Falha ao adicionar loja ao histórico!',
      type: 'danger',
    })
  }
}

export function* getHistory(action: PayloadAction<GetHistoryType>) {
  try {
    const { userId, all } = action.payload
    const route = all
      ? `/users/lastseen/all/${userId}`
      : `/users/lastseen/${userId}`
    const response: { data: StoreType[]; status: number } = yield call(
      api.get,
      route
    )
    const payload = response.data

    if (response.status === 200) {
      yield put(HistoryActions.setHistory(payload))
    }
  } catch (error: any) {
    return toast.danger({
      message: 'Falha ao buscar histórico!',
      type: 'danger',
    })
  }
}

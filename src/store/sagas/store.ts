import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'

import api from '../../services/api'

import { StoreType } from '../../types/Store'

import { StoreActions } from '../ducks/storeSlice'

import { toast } from '../../helpers/toast'

export function* getStores(action: PayloadAction<{ subcategoryId: string }>) {
  try {
    const response: { data: StoreType[]; status: number } = yield call(
      api.get,
      `/stores/subcategory/${action.payload.subcategoryId}`
    )
    const payload = response.data

    if (response.status === 200) {
      yield put(StoreActions.setStores(payload))
    }
  } catch (error) {
    return toast.danger({
      message: 'Falha ao buscar lugares!',
      type: 'danger',
    })
  }
}

export function* requestSearchStores(
  action: PayloadAction<{ keyword: string }>
) {
  try {
    const response: { data: StoreType[]; status: number } = yield call(
      api.get,
      `/stores/app/search?keyword=${action.payload.keyword}`
    )
    const payload = response.data

    if (response.status === 200) {
      yield put(StoreActions.successSearchStores(payload))
    }
  } catch (error) {
    return toast.danger({
      message: 'Falha ao buscar lugares!',
      type: 'danger',
    })
  }
}

export function* getStoreDetails(action: PayloadAction<{ id: string }>) {
  try {
    const response: { data: StoreType } = yield call(
      api.get,
      `/stores/${action.payload.id}`
    )
    const payload = response.data

    yield put(StoreActions.setStoreDetails(payload))
  } catch (error) {
    return toast.danger({
      message: 'Falha ao buscar detalhes do lugar!',
      type: 'danger',
    })
  }
}

export function* updateScore(action: PayloadAction<{ id: string }>) {
  try {
    yield call(api.patch, `/stores/score/${action.payload.id}`)
  } catch (error) {
    return toast.danger({
      message: 'Falha ao atualizar score do lugar!',
      type: 'danger',
    })
  }
}

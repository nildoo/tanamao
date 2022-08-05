import { call, put } from 'redux-saga/effects'

import api from '../../services/api'

import { CategoryType, MainCategoryType } from '../../types/Category'

import { CategoryActions } from '../ducks/categorySlice'

import { toast } from '../../helpers/toast'

export function* getCategories() {
  try {
    const response: { data: CategoryType[]; status: number } = yield call(
      api.get,
      '/categories/populate'
    )
    const payload = response.data

    if (response.status === 200) {
      yield put(CategoryActions.setCategories(payload))
    }
  } catch (error) {
    return toast.danger({
      message: 'Falha ao buscar categorias!',
      type: 'danger',
    })
  }
}

export function* getMainCategories() {
  try {
    const response: { data: MainCategoryType[]; status: number } = yield call(
      api.get,
      '/categories/main'
    )
    const payload = response.data

    if (response.status === 200) {
      yield put(CategoryActions.setMainCategories(payload))
    }
  } catch (error) {
    return toast.danger({
      message: 'Falha ao buscar categorias principais!',
      type: 'danger',
    })
  }
}

import { call, put } from 'redux-saga/effects'

import { BannerType } from '../../types/Banner'

import api from '../../services/api'
import { toast } from '../../helpers/toast'

import { BannerActions } from '../ducks/bannerSlice'

export function* getBanners() {
  try {
    const response: { data: BannerType[]; status: number } = yield call(
      api.get,
      '/banners'
    )
    const payload = response.data

    if (response.status === 200) {
      yield put(BannerActions.setBanners(payload))
    }
  } catch (error) {
    return toast.danger({
      message: 'Falha ao buscar banners!',
      type: 'danger',
    })
  }
}

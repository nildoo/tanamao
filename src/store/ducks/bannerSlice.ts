import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { BannerType } from '../../types/Banner'

import { RootState } from '../index'

const initialState: { list: BannerType[]; loading: boolean } = {
  list: [],
  loading: false,
}

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    getBanners: (state) => {
      return { ...state, list: initialState.list, loading: true }
    },
    setBanners: (state, action: PayloadAction<BannerType[]>) => {
      return { ...state, list: action.payload, loading: false }
    },
  },
})

export const selectBanner = (state: RootState) => state.banner
export const BannerActions = bannerSlice.actions

export default bannerSlice.reducer

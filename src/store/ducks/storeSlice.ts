import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { StoreType } from '../../types/Store'

import { RootState } from '../index'

const initialState: {
  details: StoreType
  list: StoreType[]
  loading: boolean
} = {
  details: {
    _id: '',
    name: '',
    address: '',
    premium: false,
    subcategories: [
      {
        name: '',
        description: '',
      },
    ],
    gallery: [],
  },
  list: [],
  loading: false,
}

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    getStores: (state, action: PayloadAction<{ subcategoryId: string }>) => {
      return { ...state, list: initialState.list, loading: true }
    },
    setStores: (state, action: PayloadAction<StoreType[]>) => {
      return { ...state, list: action.payload, loading: false }
    },
    requestSearchStores: (
      state,
      action: PayloadAction<{ keyword: string }>
    ) => {
      return { ...state, list: initialState.list, loading: true }
    },
    successSearchStores: (state, action: PayloadAction<StoreType[]>) => {
      return { ...state, list: action.payload, loading: false }
    },
    getStoreDetails: (state, action: PayloadAction<{ id: string }>) => {
      return { ...state, details: initialState.details, loading: true }
    },
    setStoreDetails: (state, action: PayloadAction<StoreType>) => {
      return { ...state, details: action.payload, loading: false }
    },
    updateScore: (_, action: PayloadAction<{ id: string }>) => {},
  },
})

export const selectStore = (state: RootState) => state.store
export const StoreActions = storeSlice.actions

export default storeSlice.reducer

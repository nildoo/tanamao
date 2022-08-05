import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AddStoreToHistoryType, GetHistoryType } from '../../types/History'
import { StoreType } from '../../types/Store'

import { AuthActions } from './authSlice'
import { RootState } from '../index'

const initialState: { list: StoreType[]; loading: boolean } = {
  list: [],
  loading: false,
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addStoreToHistory: (_, action: PayloadAction<AddStoreToHistoryType>) => {},
    getHistory: (state, action: PayloadAction<GetHistoryType>) => {
      return { ...state, list: initialState.list, loading: true }
    },
    setHistory: (state, action: PayloadAction<StoreType[]>) => {
      return { ...state, list: action.payload, loading: false }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AuthActions.logout, (state) => {
      return { ...state, ...initialState }
    })
  },
})

export const selectHistory = (state: RootState) => state.history
export const HistoryActions = historySlice.actions

export default historySlice.reducer

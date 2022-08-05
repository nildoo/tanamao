import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CategoryType, MainCategoryType } from '../../types/Category'

import { RootState } from '../index'

const initialState: {
  list: CategoryType[]
  mainList: MainCategoryType[]
  loading: boolean
  mainLoading: boolean
} = {
  list: [],
  mainList: [],
  loading: false,
  mainLoading: false,
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getCategories: (state) => {
      return { ...state, list: initialState.list, loading: true }
    },
    setCategories: (state, actions: PayloadAction<CategoryType[]>) => {
      return { ...state, list: actions.payload, loading: false }
    },
    getMainCategories: (state) => {
      return { ...state, mainList: initialState.mainList, mainLoading: true }
    },
    setMainCategories: (state, actions: PayloadAction<MainCategoryType[]>) => {
      return { ...state, mainList: actions.payload, mainLoading: false }
    },
  },
})

export const selectCategory = (state: RootState) => state.category
export const CategoryActions = categorySlice.actions

export default categorySlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SaveFcmTokenType, NotificationType } from '../../types/User'

import { RootState } from '../index'

const initialState: { notifications: NotificationType[]; loading: boolean } = {
  notifications: [],
  loading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveFcmToken: (_, action: PayloadAction<SaveFcmTokenType>) => {},
    getNotifications: (state, action: PayloadAction<{ id: string }>) => {
      return {
        ...state,
        notifications: initialState.notifications,
        loading: true,
      }
    },
    setNotifications: (state, action: PayloadAction<NotificationType[]>) => {
      return { ...state, notifications: action.payload, loading: false }
    },
  },
})

export const selectUser = (state: RootState) => state.user
export const UserActions = userSlice.actions

export default userSlice.reducer

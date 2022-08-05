import { DeviceEventEmitter } from 'react-native'

import { ToastType } from '../types/Others'

export const toast = {
  success: (props: ToastType) => {
    DeviceEventEmitter.emit('SHOW_TOAST_MESSAGE', { ...props })
  },
  danger: (props: ToastType) => {
    DeviceEventEmitter.emit('SHOW_TOAST_MESSAGE', { ...props })
  },
}

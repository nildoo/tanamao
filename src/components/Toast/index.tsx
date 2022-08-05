import React, { useEffect, useRef, useState } from 'react'
import { Animated, DeviceEventEmitter } from 'react-native'

import { ToastType } from '../../types/Others'

import { COLORS, SIZES } from '../../constants/theme'

import { Text } from './styles'

export const Toast = () => {
  const [messageType, setMessageType] = useState<String>(''),
    [message, setMessage] = useState<String>(''),
    [duration, setDuration] = useState<Number>(3000),
    opacity = useRef(new Animated.Value(0)).current

  const onNewToast = (props: ToastType) => {
    setMessage(props.message)
    setMessageType(props.type)
  }

  const closeToast = () => {
    setMessage('')
    setDuration(3000)
  }

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start()
  }, [message])

  useEffect(() => {
    const durationRef =
      message?.length &&
      setInterval(() => {
        duration === 0
          ? closeToast()
          : setDuration((prev) => Number(prev) - 1000)
      }, 1000)

    return () => clearInterval(durationRef as NodeJS.Timeout)
  }, [message, duration])

  useEffect(() => {
    DeviceEventEmitter.addListener('SHOW_TOAST_MESSAGE', onNewToast)

    return () => DeviceEventEmitter.removeAllListeners()
  }, [])

  return message?.length ? (
    <Animated.View
      style={{
        opacity,
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: '25%',
        backgroundColor: messageType === 'danger' ? COLORS.red : COLORS.green,
        borderRadius: SIZES.lightRadius,
        margin: SIZES.margin,
        elevation: SIZES.elevation,
      }}
    >
      <Text>{message}</Text>
    </Animated.View>
  ) : null
}

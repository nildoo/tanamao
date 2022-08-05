import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { createStackNavigator } from '@react-navigation/stack'
import messaging from '@react-native-firebase/messaging'

import { displayForegroundNotification } from '../helpers/displayForegroundNotification'

import { useStoragedSocialCredentials } from '../hooks/storage'
import { useInterceptor } from '../hooks/interceptor'
import { useAppDispatch, useAppSelector } from '../hooks/store'

import { selectSocialCredentials } from '../store/ducks/authSlice'
import { UserActions } from '../store/ducks/userSlice'

import LoginScreen from '../screens/Login'
import Tabs from './Tabs'

const Stack = createStackNavigator()

export default () => {
  const dispatch = useAppDispatch()
  const { userId, fcmToken } = useAppSelector(selectSocialCredentials)

  useEffect(() => {
    useStoragedSocialCredentials()
    useInterceptor()
    SplashScreen.hide()
  }, [])

  useEffect(() => {
    if (userId) {
      const removeOnMessage = messaging().onMessage(
        displayForegroundNotification
      )
      const removeOnTokenRefresh = messaging().onTokenRefresh(
        (token) =>
          fcmToken !== token &&
          dispatch(UserActions.saveFcmToken({ userId, token }))
      )

      messaging()
        .getToken()
        .then(
          (token) =>
            fcmToken !== token &&
            dispatch(UserActions.saveFcmToken({ userId, token }))
        )

      return () => {
        removeOnTokenRefresh()
        removeOnMessage()
      }
    }
  }, [userId])

  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{ headerShown: false }}
    >
      {userId ? (
        <Stack.Screen name="Tabs" component={Tabs} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Tabs" component={Tabs} />
        </>
      )}
    </Stack.Navigator>
  )
}

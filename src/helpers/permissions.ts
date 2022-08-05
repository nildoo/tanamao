import { Platform, PermissionsAndroid } from 'react-native'
import PushNotification, { Importance } from 'react-native-push-notification'
import messaging from '@react-native-firebase/messaging'
import Geolocation from 'react-native-geolocation-service'

export const requestPermissions = async () => {
  if (Platform.OS === 'ios') {
    const permission = await Geolocation.requestAuthorization('whenInUse')

    if (permission === 'granted') {
      return true
    }
  }

  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    )

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    }
  }
}

export const createAndroidChannel = () => {
  PushNotification.createChannel(
    {
      channelId: 'default',
      channelName: 'Padrão',
      soundName: 'default',
      vibrate: true,
      importance: Importance.HIGH,
    },
    () => {}
  )
}

export const requestIosPermission = async () => {
  const result = await messaging().hasPermission()

  result !== messaging.AuthorizationStatus.AUTHORIZED &&
    (await messaging().requestPermission())
}

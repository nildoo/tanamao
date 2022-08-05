import PushNotification from 'react-native-push-notification'
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging'

export const displayForegroundNotification = (
  message: FirebaseMessagingTypes.RemoteMessage
) => {
  const { notification } = message

  PushNotification.localNotification({
    channelId: 'default',
    title: notification?.title,
    message: notification?.body || '',
    smallIcon: 'notification_icon',
    largeIcon: 'notification_icon',
  })
}

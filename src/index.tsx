import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, Platform } from 'react-native'
import { Provider } from 'react-redux'
import {
  NavigationContainer,
  DefaultTheme,
  LinkingOptions,
} from '@react-navigation/native'

import {
  createAndroidChannel,
  requestIosPermission,
} from './helpers/permissions'

import { COLORS } from './constants/theme'
import DefaultStack from './routes/DefaultStack'
import { Toast } from './components/Toast'

import { store } from './store'

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.white,
    },
  },
  STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0,
  linking: LinkingOptions<{}> = {
    prefixes: ['tanamao://'],
    config: {
      screens: {
        Tabs: {
          screens: {
            HomeStack: {
              screens: {
                Home: {
                  path: 'home/:userId?/:username?/:profilePicture?/:token?/:refreshToken?/:fcmToken?',
                  parse: {
                    userId: (userId: string) => userId,
                    username: (username: string) =>
                      decodeURIComponent(username),
                    profilePicture: (profilePicture: string) =>
                      decodeURIComponent(profilePicture),
                    token: (token: string) => token,
                    refreshToken: (refreshToken: string) => refreshToken,
                    fcmToken: (fcmToken: string) => fcmToken,
                  },
                },
              },
            },
          },
        },
      },
    },
  }

const App = () => {
  useEffect(() => {
    Platform.OS === 'android' && createAndroidChannel()
    Platform.OS === 'ios' && requestIosPermission()
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme} linking={linking}>
        <SafeAreaView
          style={{ height: STATUS_BAR_HEIGHT, backgroundColor: COLORS.primary }}
        >
          <StatusBar
            hidden={false}
            backgroundColor={COLORS.primary}
            barStyle="light-content"
          />
        </SafeAreaView>
        <SafeAreaView style={{ flex: 1 }}>
          <Toast />
          <DefaultStack />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  )
}

export default App

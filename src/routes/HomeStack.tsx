import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/Home'
import StoresScreen from '../screens/Stores'
import StoreScreen from '../screens/Store'

const Stack = createStackNavigator()

export default () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Stores" component={StoresScreen} />
    <Stack.Screen name="Store" component={StoreScreen} />
  </Stack.Navigator>
)

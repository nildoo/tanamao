import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import FavoriteTypesScreen from '../screens/FavoriteTypes'
import FavoritesScreen from '../screens/Favorites'

const Stack = createStackNavigator()

export default () => (
  <Stack.Navigator
    initialRouteName="FavoriteTypes"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="FavoriteTypes" component={FavoriteTypesScreen} />
    <Stack.Screen name="Favorites" component={FavoritesScreen} />
  </Stack.Navigator>
)

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './HomeStack'
import SearchScreen from '../screens/Search'
import FavoritesStack from './FavoritesStack'
import NotificationsScreen from '../screens/Notifications'
import AccountScreen from '../screens/Account'

import { ICON } from '../constants/icon'
import { COLORS } from '../constants/theme'

const Tab = createBottomTabNavigator()

export default () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 50,
        backgroundColor: COLORS.white,
      },
    }}
  >
    <Tab.Screen
      name="HomeStack"
      component={HomeStack}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <ICON
            focused={focused}
            name={focused ? 'home' : 'home-outline'}
            size={26}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <ICON
            focused={focused}
            name={focused ? 'search' : 'search-outline'}
            size={26}
          />
        ),
      }}
    />
    <Tab.Screen
      name="FavoritesStack"
      component={FavoritesStack}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <ICON
            focused={focused}
            name={focused ? 'heart' : 'heart-outline'}
            size={26}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <ICON
            focused={focused}
            name={focused ? 'notifications' : 'notifications-outline'}
            size={26}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <ICON
            focused={focused}
            name={focused ? 'person' : 'person-outline'}
            size={26}
          />
        ),
      }}
    />
  </Tab.Navigator>
)

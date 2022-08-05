import React, { memo } from 'react'
import { Linking } from 'react-native'

import { BASE_URL } from '../constants'

import LoginComponent from '../components/Login'

const Login = () => (
  <LoginComponent
    socialLogin={(provider: string) =>
      Linking.openURL(`${BASE_URL}/users/${provider}`)
    }
  />
)

export default memo(Login)

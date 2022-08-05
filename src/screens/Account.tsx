import React, { memo } from 'react'

import { AuthActions, selectSocialCredentials } from '../store/ducks/authSlice'
import { useAppDispatch, useAppSelector } from '../hooks/store'

import LoginScreen from './Login'
import { UserHeader } from '../components/Headers'
import AccountComponent from '../components/Account'

const Account = () => {
  const dispatch = useAppDispatch()
  const socialCredentials = useAppSelector(selectSocialCredentials)

  return socialCredentials.userId ? (
    <>
      <UserHeader />
      <AccountComponent logout={() => dispatch(AuthActions.logout())} />
    </>
  ) : (
    <LoginScreen />
  )
}

export default memo(Account)

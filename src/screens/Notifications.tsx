import React, { memo, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/store'
import { selectSocialCredentials } from '../store/ducks/authSlice'
import { selectUser, UserActions } from '../store/ducks/userSlice'

import { UserHeader } from '../components/Headers'
import { Loading } from '../components/Loading'
import NotificationsComponent from '../components/Notifications'
import { EmptyData } from '../components/EmptyData'

const Notifications = () => {
  const dispatch = useAppDispatch(),
    socialCredentials = useAppSelector(selectSocialCredentials),
    user = useAppSelector(selectUser),
    notifications = user.notifications,
    loading = user.loading

  useEffect(() => {
    if (socialCredentials.userId) {
      dispatch(UserActions.getNotifications({ id: socialCredentials.userId }))
    }
  }, [socialCredentials.userId])

  return (
    <>
      <UserHeader />
      {loading ? (
        <Loading />
      ) : notifications.length ? (
        <NotificationsComponent notifications={notifications} />
      ) : (
        <EmptyData />
      )}
    </>
  )
}

export default memo(Notifications)

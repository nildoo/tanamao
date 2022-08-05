import React from 'react'

import { ICON } from '../../../constants/icon'

import { useAppSelector } from '../../../hooks/store'
import { selectSocialCredentials } from '../../../store/ducks/authSlice'

import { Container, Image, Text } from './styles'

const User = () => {
  const { profilePicture, username } = useAppSelector(selectSocialCredentials)

  return (
    <Container>
      {profilePicture ? (
        <Image source={{ uri: profilePicture }} />
      ) : (
        <ICON name="person-circle" size={34} color="gray" />
      )}
      {username ? <Text>{username}</Text> : <Text>Anônimo</Text>}
    </Container>
  )
}

export default User

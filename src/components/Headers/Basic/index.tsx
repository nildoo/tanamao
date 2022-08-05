import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { ICON } from '../../../constants/icon'
import { LOGO_ICON } from '../../../constants/images'

import { Container, Button, Image } from './styles'

const Basic = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <Button activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <ICON name="chevron-back-outline" color="primary" />
      </Button>
      <Image source={LOGO_ICON} />
    </Container>
  )
}

export default Basic

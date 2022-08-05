import React from 'react'

import { LOGO_ICON } from '../../constants/images'

import { Container, Image, Text } from './styles'

export const EmptyData = () => (
  <Container>
    <Image source={LOGO_ICON} />
    <Text>Não há nada por aqui...</Text>
  </Container>
)

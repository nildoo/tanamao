import React from 'react'

import { ICON } from '../../constants/icon'

import { Container } from './styles'

export const WhatsAppButton = ({ onPress }: { onPress: Function }) => (
  <Container activeOpacity={0.8} onPress={() => onPress()}>
    <ICON name="logo-whatsapp" color="white" size={35} />
  </Container>
)

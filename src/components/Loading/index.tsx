import React from 'react'

import { COLORS } from '../../constants/theme'

import { Container, Indicator } from './styles'

export const Loading = () => (
  <Container>
    <Indicator size="large" color={COLORS.primary} />
  </Container>
)

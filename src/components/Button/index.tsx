import React from 'react'

import { ButtonType } from '../../types/Others'

import { ICON } from '../../constants/icon'

import { Container, Text } from './styles'

export const Button = ({
  background,
  large,
  icon,
  text,
  onPress,
}: ButtonType) => (
  <Container
    background={background}
    large={large}
    activeOpacity={0.8}
    onPress={() => onPress()}
  >
    {icon ? <ICON name={icon} size={20} color="white" /> : null}
    <Text>{text}</Text>
  </Container>
)

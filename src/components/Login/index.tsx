import React from 'react'

import { LoginComponentType } from '../../types/Auth'

import { LOGO } from '../../constants/images'
import { ICON } from '../../constants/icon'

import { Container, BoxIcon, BoxText, Text, Image, Button } from './styles'

const Login = ({ socialLogin }: LoginComponentType) => (
  <Container>
    <Image source={LOGO} />
    <Button background="maps" onPress={() => socialLogin('google')}>
      <BoxIcon>
        <ICON name="logo-google" color="white" size={20} />
      </BoxIcon>
      <BoxText>
        <Text>Entrar com Google</Text>
      </BoxText>
    </Button>
    <Button background="facebook" onPress={() => socialLogin('facebook')}>
      <BoxIcon>
        <ICON name="logo-facebook" color="white" size={20} />
      </BoxIcon>
      <BoxText>
        <Text>Entrar com Facebook</Text>
      </BoxText>
    </Button>
  </Container>
)

export default Login

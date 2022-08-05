import React from 'react'

import { ICON } from '../../constants/icon'

import { Container, Row, Content, Text } from './styles'

const Account = ({ logout }: { logout: Function }) => (
  <Container>
    <Row onPress={() => logout()}>
      <Content>
        <ICON name="log-out-outline" />
        <Text>Sair</Text>
      </Content>
    </Row>
  </Container>
)

export default Account

import React from 'react'

import { FavoriteTypesType } from '../../types/Favorite'

import { ICON, MATERIALICON } from '../../constants/icon'

import { Container, Row, Content, Text } from './styles'

const FavoriteTypes = ({ goToFavorites }: FavoriteTypesType) => (
  <Container>
    <Row onPress={() => goToFavorites('category')}>
      <Content>
        <ICON name="apps-outline" />
        <Text>Categorias</Text>
      </Content>
    </Row>
    <Row onPress={() => goToFavorites('subcategory')}>
      <Content>
        <MATERIALICON name="family-tree" />
        <Text>Subcategorias</Text>
      </Content>
    </Row>
    <Row onPress={() => goToFavorites('store')}>
      <Content>
        <ICON name="home-outline" />
        <Text>Lugares</Text>
      </Content>
    </Row>
  </Container>
)

export default FavoriteTypes

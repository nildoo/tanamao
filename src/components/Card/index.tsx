import React from 'react'

import { CardType } from '../../types/Others'

import { BASE_URL } from '../../constants'
import { DEFAULT } from '../../constants/images'

import { Container, Image, Text } from './styles'

export const Card = ({ store, onPress }: CardType) => (
  <Container activeOpacity={0.8} onPress={() => onPress()}>
    <Image
      source={
        store.premium && store.profileImage
          ? {
              uri: `${BASE_URL}/stores/imageprofile/${store.profileImage}`,
            }
          : !store.premium && store.subcategories[0]?.profileImage
          ? {
              uri: `${BASE_URL}/subcategories/imageprofile/${store.subcategories[0]?.profileImage}`,
            }
          : DEFAULT
      }
    />
    <Text numberOfLines={1}>{store.name}</Text>
    <Text small numberOfLines={1}>
      {store.subcategories.map(
        (item, index) =>
          `${item.name}${index < store.subcategories.length - 1 ? ', ' : ''}`
      )}
    </Text>
  </Container>
)

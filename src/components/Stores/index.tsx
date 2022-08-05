import React from 'react'

import { StoresComponentType } from '../../types/Store'

import { BASE_URL } from '../../constants'
import { DEFAULT } from '../../constants/images'

import { Container, Content, Box, Image, Text } from './styles'

const Stores = ({ stores, goToStore }: StoresComponentType) => (
  <Container showsVerticalScrollIndicator={false}>
    <Content>
      {stores.map((item) => (
        <Box
          key={item._id}
          activeOpacity={0.7}
          onPress={() => goToStore(item._id)}
        >
          <Image
            source={
              item.premium && item.profileImage
                ? {
                    uri: `${BASE_URL}/stores/imageprofile/${item.profileImage}`,
                  }
                : !item.premium && item.subcategories[0]?.profileImage
                ? {
                    uri: `${BASE_URL}/subcategories/imageprofile/${item.subcategories[0]?.profileImage}`,
                  }
                : DEFAULT
            }
          />
          <Text numberOfLines={1}>{item.name}</Text>
          <Text small numberOfLines={1}>
            {item.subcategories.map(
              (value, index) =>
                `${value.name}${
                  index < item.subcategories.length - 1 ? ', ' : ''
                }`
            )}
          </Text>
        </Box>
      ))}
    </Content>
  </Container>
)

export default Stores

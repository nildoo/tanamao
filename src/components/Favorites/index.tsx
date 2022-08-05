import React from 'react'

import { FavoritesComponenetType } from '../../types/Favorite'

import { ICON } from '../../constants/icon'

import { Container, Row, Content, Text, Actions, Button } from './styles'

const Favorites = ({
  favorites,
  type,
  goToStore,
  updateNotificationStatus,
  removeFavorite,
}: FavoritesComponenetType) => (
  <Container showsVerticalScrollIndicator={false}>
    {favorites.map((item) => (
      <Row key={item.favorite._id}>
        <Content
          activeOpacity={type === 'store' ? 0.7 : 1}
          onPress={() =>
            type === 'store' ? goToStore(item.favorite._id) : null
          }
        >
          <Text numberOfLines={1}>{item.favorite.name}</Text>
        </Content>
        <Actions>
          <Button
            activeOpacity={0.7}
            onPress={() =>
              updateNotificationStatus({
                favoriteId: item.favorite._id,
                status: !item.notificationEnabled,
              })
            }
          >
            <ICON
              name={
                item.notificationEnabled
                  ? 'notifications'
                  : 'notifications-outline'
              }
              color="primary"
            />
          </Button>
          <Button
            activeOpacity={0.7}
            onPress={() => removeFavorite(item.favorite._id)}
          >
            <ICON name="trash-outline" color="primary" />
          </Button>
        </Actions>
      </Row>
    ))}
  </Container>
)

export default Favorites

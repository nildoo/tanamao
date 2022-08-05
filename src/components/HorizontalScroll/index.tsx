import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { HorizontalScrollType } from '../../types/Others'

import { useAppSelector } from '../../hooks/store'
import { selectSocialCredentials } from '../../store/ducks/authSlice'

import { ICON } from '../../constants/icon'
import { Card } from '../Card'

import { Container, Text, Row, SeeMore, Button, Scroll } from './styles'

export const HorizontalScroll = ({
  categorizationInfos,
  stores,
  addFavorite,
  removeFavorite,
  scrollRef,
  isHistory = false,
  favorited = false,
  goToCategory,
  subcategoryId,
}: HorizontalScrollType) => {
  const { userId } = useAppSelector(selectSocialCredentials)
  const { navigate } = useNavigation()

  return (
    <Container>
      {isHistory ? (
        <Text large>{categorizationInfos.name}</Text>
      ) : (
        <Row>
          <Text large>{categorizationInfos.name}</Text>
          <Button
            activeOpacity={0.7}
            onPress={() =>
              !userId
                ? navigate('Login' as never)
                : !favorited && addFavorite
                ? addFavorite()
                : removeFavorite && removeFavorite(categorizationInfos._id)
            }
          >
            <ICON
              name={favorited ? 'heart' : 'heart-outline'}
              color={favorited ? 'primary' : 'gray'}
            />
          </Button>
        </Row>
      )}
      <Text>{categorizationInfos.description}</Text>
      <Scroll
        ref={(ref) => scrollRef.current?.push(ref)}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {stores.map((store) => (
          <Card
            key={store._id}
            store={store}
            onPress={() => navigate('Store' as never, store._id as never)}
          />
        ))}
        <SeeMore
          activeOpacity={0.7}
          onPress={() =>
            goToCategory
              ? goToCategory()
              : navigate(
                  'Stores' as never,
                  { isHistory, subcategoryId } as never
                )
          }
        >
          <Text large color="primary">
            Ver mais
          </Text>
          <ICON name="chevron-forward" color="primary" size={28} />
        </SeeMore>
      </Scroll>
    </Container>
  )
}

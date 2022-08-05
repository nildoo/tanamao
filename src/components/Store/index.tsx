import React from 'react'
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import { StoreComponentType } from '../../types/Store'

import { openDeviceApp } from '../../helpers/openDeviceApp'

import { BASE_URL } from '../../constants'
import { ICON } from '../../constants/icon'
import { DEFAULT } from '../../constants/images'

import { Button } from '../Button'

import {
  Container,
  Row,
  Column,
  Text,
  Image,
  ButtonIcon,
  Map,
  Gallery,
} from './styles'

const Store = ({
  store,
  logged,
  addFavorite,
  removeFavorite,
  goToLogin,
  favorited,
}: StoreComponentType) => (
  <Container showsVerticalScrollIndicator={false}>
    <Row>
      <Text large>{store.name}</Text>
      <ButtonIcon
        activeOpacity={0.7}
        onPress={() =>
          !logged
            ? goToLogin()
            : !favorited
            ? addFavorite()
            : removeFavorite(store._id)
        }
      >
        <ICON
          name={favorited ? 'heart' : 'heart-outline'}
          color={favorited ? 'primary' : 'gray'}
        />
      </ButtonIcon>
    </Row>
    <Row>
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
    </Row>
    {store.premium ? (
      <Row>
        <Row>
          <ICON name="phone-portrait" color="primary" size={20} />
          <Text color="primary" paddingLeft>
            {store.cellphone ? store.cellphone : 'Número não cadastrado'}
          </Text>
        </Row>
        <Row>
          {store.distance ? (
            <>
              <ICON name="location" color="primary" size={20} />
              <Text color="primary" paddingLeft>
                {store.distance}
              </Text>
            </>
          ) : null}
        </Row>
      </Row>
    ) : null}
    <Row>
      {store.premium && store.description ? (
        <Text>{store.description}</Text>
      ) : store.premium && !store.description ? (
        <Text>Descrição não cadastrada!</Text>
      ) : (
        <Text>{store.subcategories[0]?.description}</Text>
      )}
    </Row>
    <Row flexStart>
      <ICON name="trail-sign" color="primary" size={20} />
      <Text color="primary" paddingLeft>
        {store.address}
      </Text>
    </Row>
    {store.premium ? (
      <>
        {store.site ? (
          <Row flexStart>
            <ICON name="globe-outline" color="primary" size={20} />
            <Text
              paddingLeft
              color="primary"
              onPress={() =>
                store.site ? openDeviceApp.site(store.site) : null
              }
            >
              {store.site}
            </Text>
          </Row>
        ) : null}
        <Row>
          <Button
            icon="call"
            text="Telefone"
            onPress={() =>
              store.phone ? openDeviceApp.phone(store.phone) : null
            }
          />
          <Button
            background="instagram"
            icon="logo-instagram"
            text="Instagram"
            onPress={() =>
              store.instagram ? openDeviceApp.instagram(store.instagram) : null
            }
          />
          <Button
            background="facebook"
            icon="logo-facebook"
            text="Facebook"
            onPress={() =>
              store.facebook ? openDeviceApp.facebook(store.facebook.id) : null
            }
          />
        </Row>
        {store.region ? (
          <Row>
            <Map
              provider={PROVIDER_GOOGLE}
              region={{
                latitude: store.region.lat,
                longitude: store.region.lng,
                latitudeDelta: 0,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                coordinate={{
                  latitude: store.region.lat,
                  longitude: store.region.lng,
                }}
              />
            </Map>
          </Row>
        ) : null}
        <Row>
          <Button
            background="black"
            icon="car"
            text="Uber"
            onPress={() =>
              store.region && store.userRegion
                ? openDeviceApp.uber(
                    store.name,
                    { lat: store.userRegion.lat, lng: store.userRegion.lng },
                    { lat: store.region.lat, lng: store.region.lng }
                  )
                : null
            }
          />
          <Button
            background="maps"
            icon="location-outline"
            text="Maps"
            onPress={() =>
              store.region ? openDeviceApp.maps(store.name, store.region) : null
            }
          />
        </Row>
        {store.gallery.length ? (
          <Column>
            <Text large color="primary">
              Galeria
            </Text>
            <Gallery>
              {store.gallery.map((item, index) => (
                <Image
                  small
                  key={index}
                  source={{ uri: `${BASE_URL}/stores/gallery/${item}` }}
                />
              ))}
            </Gallery>
          </Column>
        ) : null}
      </>
    ) : null}
  </Container>
)

export default Store

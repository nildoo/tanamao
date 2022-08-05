import { Linking, Platform } from 'react-native'

import { RegionType } from '../types/Region'

export const openDeviceApp = {
  site: (url: string) => {
    Linking.openURL(url)
  },
  phone: (phone: string) => {
    const url = Platform.select({
      android: `tel:${phone}`,
      ios: `telprompt:${phone}`,
    })

    url && Linking.openURL(url)
  },
  instagram: (username: string) => {
    Linking.openURL(`instagram://user?username=${username}`).catch(() => {
      Linking.openURL(`https://www.instagram.com/${username}`)
    })
  },
  facebook: (id: number) => {
    Linking.openURL(`fb://profile/${id}`).catch(() => {
      Linking.openURL(`https://www.facebook.com/${id}`)
    })
  },
  uber: (
    storeName: string,
    userRegion: RegionType,
    storeRegion: RegionType
  ) => {
    Linking.openURL(
      `uber://?action=setPickup&pickup[latitude]=${userRegion.lat}&pickup[longitude]=${userRegion.lng}&dropoff[latitude]=${storeRegion.lat}&dropoff[longitude]=${storeRegion.lng}&dropoff[nickname]=${storeName}`
    ).catch(() => {
      Linking.openURL(
        'https://m.uber.com/ul/?action=setPickup&pickup[latitude]=37.775818&pickup[longitude]=-122.418028&dropoff[latitude]=37.802374&dropoff[longitude]=-122.405818&dropoff[nickname]=Destino'
      )
    })
  },
  maps: (storeName: string, region: RegionType) => {
    const url = Platform.select({
      android: `geo:0,0?q=${region.lat},${region.lng}(${storeName})`,
      ios: `maps:0,0?q=${storeName}@${region.lat},${region.lng}`,
    })

    url
      ? Linking.openURL(url).catch(() =>
          Linking.openURL(
            `https://www.google.com/maps/search/?api=1&query=${region.lat},${region.lng}`
          )
        )
      : null
  },
  whatsapp: (cellphone: string) => {
    Linking.openURL(`whatsapp://send?phone=+55${cellphone}`)
  },
}

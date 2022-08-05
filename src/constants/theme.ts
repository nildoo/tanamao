import { Dimensions } from 'react-native'

import { ColorsType } from '../types/Styles'

export const COLORS: ColorsType = {
  primary: '#195B9B',
  gray: '#636363',
  mediumGray: '#C7C7CD',
  lightGray: '#eee',
  green: '#27AE60',
  red: '#dc3545',
  white: '#FFFFFF',
  black: '#000',
  whatsapp: '#25D366',
  instagram: '#C13584',
  facebook: '#4267B2',
  maps: '#DB4437',
}

const width = Dimensions.get('screen').width

export const SIZES = {
  lightMargin: 5,
  margin: 15,
  radius: 15,
  lightRadius: 10,
  elevation: 4,
  width,
}

export const FONTS = {
  h1: { fontFamily: 'Overpass-SemiBold', fontSize: 18 },
  h2: { fontFamily: 'Overpass-Regular', fontSize: 14 },
  h3: { fontFamily: 'Overpass-ExtraLight', fontSize: 12 },
  h4: { fontFamily: 'Overpass-ExtraLight', fontSize: 10 },
}

export const SHADOW = {
  shadowOpacity: 0.18,
  shadowRadius: 5,
}

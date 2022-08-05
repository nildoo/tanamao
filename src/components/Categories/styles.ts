import { Platform } from 'react-native'
import styled from 'styled-components/native'

import { ActiveType } from '../../types/Styles'

import { COLORS, SIZES, FONTS, SHADOW } from '../../constants/theme'

export const Scroll = styled.ScrollView`
  flex: 1;
  height: 115px;
  margin: ${SIZES.margin}px;
  margin-top: 0;
`
export const Button = styled.TouchableOpacity<ActiveType>`
  width: 75px;
  height: 105px;
  align-items: center;
  align-self: center;
  background: ${(props) => (props.active ? COLORS.primary : COLORS.white)};
  margin: ${SIZES.lightMargin}px;
  border-radius: ${SIZES.radius}px;
  elevation: ${SIZES.elevation};

  ${Platform.select({
    ios: SHADOW,
  })}
`
export const Circle = styled.View<ActiveType>`
  width: 55px;
  height: 55px;
  align-items: center;
  justify-content: center;
  margin: ${SIZES.lightMargin * 2}px;
  background: ${(props) => (props.active ? COLORS.white : COLORS.gray)};
  border-radius: ${SIZES.radius}px;
`
export const Text = styled.Text<ActiveType>`
  text-align: center;
  padding: 0 5px;
  color: ${(props) => (props.active ? COLORS.white : COLORS.gray)};
  font-family: ${FONTS.h2.fontFamily};
  font-size: ${FONTS.h4.fontSize}px;
`

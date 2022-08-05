import { Platform } from 'react-native'
import styled, { css } from 'styled-components/native'

import { ButtonStyleType, TextType } from '../../types/Styles'

import { COLORS, FONTS, SHADOW, SIZES } from '../../constants/theme'

export const Container = styled.TouchableOpacity<ButtonStyleType>`
  flex: 1;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.background ? COLORS[props.background] : COLORS.primary};
  border-radius: ${SIZES.lightRadius}px;
  margin-right: ${SIZES.lightMargin}px;
  elevation: ${SIZES.elevation};

  ${(props) =>
    props.large &&
    css`
      flex: none;
      width: 80%;
      height: 50px;
      border-radius: ${SIZES.radius}px;
    `};

  ${Platform.select({
    ios: SHADOW,
  })}
`
export const Text = styled.Text<TextType>`
  color: ${COLORS.white};
  margin-left: ${SIZES.lightMargin}px;
  ${FONTS.h2}
`

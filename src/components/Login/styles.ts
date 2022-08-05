import styled from 'styled-components/native'

import { ButtonStyleType } from '../../types/Styles'

import { COLORS, FONTS, SIZES } from '../../constants/theme'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0 ${SIZES.margin}px;
`
export const BoxIcon = styled.View`
  width: 20%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-right-color: ${COLORS.lightGray};
  border-radius: ${SIZES.lightRadius}px;
`
export const BoxText = styled.View`
  width: 80%;
  align-items: center;
`
export const Text = styled.Text`
  color: ${COLORS.white};
  ${FONTS.h1};
`
export const Image = styled.Image`
  resize-mode: contain;
  width: ${SIZES.width / 2}px;
  height: ${SIZES.width / 2}px;
`
export const Button = styled.TouchableOpacity<ButtonStyleType>`
  width: ${SIZES.width / 1.4}px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${SIZES.lightMargin}px;
  border-radius: ${SIZES.lightRadius}px;
  background: ${(props) =>
    props.background ? COLORS[props.background] : COLORS.primary};
`

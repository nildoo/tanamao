import styled, { css } from 'styled-components/native'

import { TextType, SizesType } from '../../types/Styles'

import { COLORS, FONTS, SIZES } from '../../constants/theme'

export const Container = styled.View`
  margin: 0 ${SIZES.margin}px;
  margin-bottom: ${SIZES.margin}px;
`
export const Text = styled.Text<TextType & SizesType>`
  color: ${(props) => (props.color ? COLORS[props.color] : COLORS.gray)};
  margin-left: ${SIZES.lightMargin}px;
  ${FONTS.h2}

  ${(props) =>
    props.large &&
    css`
      ${FONTS.h1}
    `}
`
export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const SeeMore = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${SIZES.width / 3}px;
  height: ${SIZES.width / 3}px;
`
export const Button = styled.TouchableOpacity``
export const Scroll = styled.ScrollView``

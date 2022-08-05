import styled, { css } from 'styled-components/native'
import MapView from 'react-native-maps'

import { RowType, TextType, SizesType } from '../../types/Styles'

import { COLORS, FONTS, SIZES } from '../../constants/theme'

export const Container = styled.ScrollView`
  margin: 0 ${SIZES.margin}px;
`
export const Row = styled.View<RowType>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${SIZES.lightMargin}px 0;

  ${(props) =>
    props.flexStart &&
    css`
      justify-content: flex-start;
    `}
`
export const Column = styled.View`
  margin: ${SIZES.lightMargin}px 0;
`
export const Text = styled.Text<TextType & SizesType>`
  flex-shrink: 1;
  text-align: justify;
  color: ${(props) => (props.color ? COLORS[props.color] : COLORS.gray)};
  ${FONTS.h2}

  ${(props) =>
    props.large &&
    css`
      text-align: auto;
      ${FONTS.h1}
    `}

  ${(props) =>
    props.paddingLeft &&
    css`
      padding-left: 5px;
    `}
`
export const Image = styled.Image<SizesType>`
  width: ${SIZES.width / 1.1}px;
  height: ${SIZES.width / 2}px;
  border-radius: ${SIZES.lightRadius}px;

  ${(props) =>
    props.small &&
    css`
      margin: 2px;
      width: ${SIZES.width / 3.5}px;
      height: ${SIZES.width / 3.5}px;
    `}
`
export const ButtonIcon = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  align-items: center;
`
export const Map = styled(MapView)`
  width: ${SIZES.width / 1.1}px;
  height: ${SIZES.width / 2}px;
`
export const Gallery = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`

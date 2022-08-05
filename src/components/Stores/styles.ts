import styled, { css } from 'styled-components/native'

import { SizesType } from '../../types/Styles'

import { COLORS, FONTS, SIZES } from '../../constants/theme'

export const Container = styled.ScrollView``
export const Content = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`
export const Box = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${SIZES.width / 2}px;
  height: ${SIZES.width / 2}px;
  border-bottom-width: 2px;
  border-right-width: 2px;
  border-color: ${COLORS.lightGray};
`
export const Image = styled.Image`
  resize-mode: contain;
  align-self: center;
  width: 90%;
  height: ${SIZES.width / 3}px;
  border-radius: ${SIZES.radius}px;
`
export const Text = styled.Text<SizesType>`
  color: ${COLORS.gray};
  ${FONTS.h2}

  ${(props) =>
    props.small &&
    css`
      ${FONTS.h3}
    `}
`

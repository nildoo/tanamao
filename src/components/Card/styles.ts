import styled, { css } from 'styled-components/native'
import { Platform } from 'react-native'

import { SizesType } from '../../types/Styles'

import { COLORS, FONTS, SHADOW, SIZES } from '../../constants/theme'

export const Container = styled.TouchableOpacity`
  width: ${SIZES.width / 3}px;
  height: ${SIZES.width / 2.8}px;
  margin: ${SIZES.lightMargin}px;
  border-radius: ${SIZES.lightRadius}px;
  background: ${COLORS.white};
  elevation: ${SIZES.elevation};

  ${Platform.select({ ios: SHADOW })}
`
export const Image = styled.Image`
  width: 95%;
  align-self: center;
  height: ${SIZES.width / 4.5}px;
  border-radius: ${SIZES.radius}px;
  margin: ${SIZES.lightMargin}px 0;
`
export const Text = styled.Text<SizesType>`
  color: ${COLORS.gray};
  margin-left: ${SIZES.lightMargin}px;

  ${(props) =>
    props.small
      ? css`
          ${FONTS.h4}
        `
      : css`
          ${FONTS.h3}
        `};
`

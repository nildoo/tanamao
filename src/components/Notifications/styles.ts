import { Platform } from 'react-native'
import styled, { css } from 'styled-components/native'

import { SizesType } from '../../types/Styles'

import { COLORS, FONTS, SIZES } from '../../constants/theme'

export const Container = styled.ScrollView`
  margin: 0 ${SIZES.margin}px;
`
export const Row = styled.View`
  flex-direction: row;
  padding: 15px 0;
  border-bottom-color: ${COLORS.lightGray};
  border-bottom-width: 1px;

  ${Platform.select({
    ios: {
      borderBottomWidth: '2px',
    },
  })}
`
export const Column = styled.View<SizesType>`
  flex: ${(props) => (props.large ? 4 : 1)};
  justify-content: center;
`
export const Text = styled.Text<SizesType>`
  color: ${COLORS.gray};

  ${(props) =>
    props.small
      ? css`
          ${FONTS.h3}
        `
      : props.medium
      ? css`
          ${FONTS.h2}
        `
      : css`
          ${FONTS.h1}
        `}
`

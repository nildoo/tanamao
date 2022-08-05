import styled from 'styled-components/native'

import { COLORS, FONTS, SIZES } from '../../constants/theme'

export const Container = styled.View`
  margin: ${SIZES.margin}px;
`
export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  padding: 5px;
  margin: ${SIZES.lightMargin}px 0;
  border-color: ${COLORS.gray};
  border-radius: ${SIZES.lightRadius}px;
`
export const Input = styled.TextInput.attrs({
  placeholderTextColor: COLORS.mediumGray,
})`
  padding: 5px;
  color: ${COLORS.gray};
  ${FONTS.h2};
`

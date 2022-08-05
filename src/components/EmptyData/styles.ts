import styled from 'styled-components/native'

import { COLORS, FONTS, SIZES } from '../../constants/theme'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const Image = styled.Image`
  width: ${SIZES.width / 2}px;
  height: ${SIZES.width / 2}px;
`
export const Text = styled.Text`
  color: ${COLORS.primary};
  ${FONTS.h1}
`

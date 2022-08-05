import styled from 'styled-components/native'

import { COLORS, FONTS, SIZES } from '../../../constants/theme'

export const Container = styled.View`
  flex-direction: row;
  height: 50px;
  align-items: center;
  margin: 0 ${SIZES.margin}px;
  background: ${COLORS.white};
  border-bottom-width: 1.5px;
  border-bottom-color: ${COLORS.lightGray};
`
export const Image = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 30px;
`
export const Text = styled.Text`
  margin-left: 5px;
  color: ${COLORS.gray};
  ${FONTS.h1};
`

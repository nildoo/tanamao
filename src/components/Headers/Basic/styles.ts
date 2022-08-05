import styled from 'styled-components/native'

import { COLORS, SIZES } from '../../../constants/theme'

export const Container = styled.View`
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  margin: 0 ${SIZES.margin}px;
  background: ${COLORS.white};
  border-bottom-width: 1.5px;
  border-bottom-color: ${COLORS.lightGray};
`
export const Button = styled.TouchableOpacity`
  background: transparent;
`
export const Image = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 35px;
`

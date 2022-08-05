import styled from 'styled-components/native'

import { COLORS, SIZES } from '../../constants/theme'

export const Container = styled.View`
  flex: 1;
`
export const Scroll = styled.ScrollView`
  margin: 0 ${SIZES.margin}px;
  margin-top: ${SIZES.margin}px;
`
export const Image = styled.Image`
  resize-mode: contain;
  width: ${SIZES.width / 1.1}px;
  height: ${SIZES.width / 1.1}px;
  border-radius: ${SIZES.lightRadius}px;
  margin-right: ${SIZES.lightMargin}px;
`
export const Row = styled.View`
  width: 100%;
  bottom: 30px;
  height: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Indicator = styled.View`
  width: 8px;
  height: 8px;
  margin: ${SIZES.lightMargin}px;
  border-radius: 5px;
  background: ${COLORS.white};
`
export const Button = styled.TouchableOpacity``

import { Platform } from 'react-native'
import styled from 'styled-components/native'

import { COLORS, FONTS, SIZES } from '../../constants/theme'

export const Container = styled.View`
  margin: 0 ${SIZES.lightMargin}px;
`
export const Row = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 0;
  margin: 0 ${SIZES.margin}px;
  border-bottom-color: ${COLORS.lightGray};
  border-bottom-width: 1px;

  ${Platform.select({
    ios: {
      borderBottomWidth: '2px',
    },
  })}
`
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Text = styled.Text`
  ${FONTS.h2}
  color: ${COLORS.gray};
  padding: 0 15px;
`

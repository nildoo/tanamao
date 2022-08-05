import { Platform } from 'react-native'
import styled from 'styled-components/native'

import { COLORS, FONTS, SIZES } from '../../constants/theme'

export const Container = styled.ScrollView`
  margin: 0 ${SIZES.lightMargin}px;
`
export const Row = styled.View`
  height: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 ${SIZES.margin}px;
  border-bottom-color: ${COLORS.lightGray};
  border-bottom-width: 1px;

  ${Platform.select({
    ios: {
      borderBottomWidth: '2px',
    },
  })}
`
export const Content = styled.TouchableOpacity`
  flex: 4;
  height: 100%;
  justify-content: center;
`
export const Text = styled.Text`
  ${FONTS.h2}
  color: ${COLORS.gray};
  padding: 0 15px;
`
export const Actions = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`
export const Button = styled.TouchableOpacity``

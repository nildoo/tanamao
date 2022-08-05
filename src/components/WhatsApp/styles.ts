import styled from 'styled-components/native'

import { COLORS } from '../../constants/theme'

export const Container = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.whatsapp};
`

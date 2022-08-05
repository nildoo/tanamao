import styled, { css } from 'styled-components/native'
import Icons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { FocusedType } from '../types/Styles'

import { COLORS } from './theme'

export const ICON = styled(Icons)<FocusedType>`
  font-size: ${(props) => (props.size ? props.size : 24)}px;
  color: ${(props) =>
    props.color ? COLORS[props.color.toString()] : COLORS.gray};

  ${(props) =>
    props.focused &&
    css`
      color: ${COLORS.primary};
      font-size: 36px;
    `};
`
export const MATERIALICON = styled(MaterialIcons)`
  font-size: ${(props) => (props.size ? props.size : 24)}px;
  color: ${(props) =>
    props.color ? COLORS[props.color.toString()] : COLORS.gray};
`

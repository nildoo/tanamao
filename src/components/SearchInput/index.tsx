import React from 'react'

import { SearchInputType } from '../../types/Others'

import { ICON } from '../../constants/icon'

import { Container, Box, Input } from './styles'

export const SearchInput = ({ setKeyword }: SearchInputType) => (
  <Container>
    <Box>
      <ICON name="search-outline" />
      <Input
        placeholder="Lugar, categoria, subcategoria ou hashtag..."
        onChangeText={(value) => setKeyword(value)}
      />
    </Box>
  </Container>
)

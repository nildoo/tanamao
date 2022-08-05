import React from 'react'

import { CategoriesType } from '../../types/Category'

import { ICON } from '../../constants/icon'

import { Scroll, Button, Circle, Text } from './styles'

export const Categories = ({
  categories,
  active,
  setActive,
  scrollRef,
}: CategoriesType) => (
  <Scroll ref={scrollRef} horizontal showsHorizontalScrollIndicator={false}>
    <Button
      activeOpacity={0.8}
      onPress={() => setActive(0)}
      active={active === 0}
    >
      <Circle active={active === 0}>
        <ICON
          name="apps-outline"
          color={active === 0 ? 'primary' : 'white'}
          size={30}
        />
      </Circle>
      <Text active={active === 0}>Principais</Text>
    </Button>
    {categories.map((item, position) => {
      const index = position + 1

      return (
        <Button
          key={item._id}
          activeOpacity={0.8}
          onPress={() => setActive(index)}
          active={active === index}
        >
          <Circle active={active === index}>
            <ICON
              name={item.icon}
              color={active === index ? 'primary' : 'white'}
              size={30}
            />
          </Circle>
          <Text active={active === index}>{item.name}</Text>
        </Button>
      )
    })}
  </Scroll>
)

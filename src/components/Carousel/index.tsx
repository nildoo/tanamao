import React, { useEffect, useRef, useState } from 'react'
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native'

import { BannerComponentType } from '../../types/Banner'

import { BASE_URL } from '../../constants'
import { SIZES } from '../../constants/theme'

import { Container, Scroll, Image, Row, Indicator, Button } from './styles'

export const Carousel = ({
  banners,
  goToStore,
  goToSite,
}: BannerComponentType) => {
  const [selectedIndex, setSelectedIndex] = useState(0),
    scrollRef = useRef<any>(),
    onSelectedIndex = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const viewSize = event.nativeEvent.layoutMeasurement.width
      const contentOffset = event.nativeEvent.contentOffset.x
      const selected = Math.floor(contentOffset / viewSize)

      setSelectedIndex(selected)
    }

  useEffect(() => {
    setInterval(() => {
      setSelectedIndex((prev) => {
        return prev === banners.length - 1 ? 0 : prev + 1
      })
    }, 4000)
  }, [banners])

  useEffect(() => {
    const autoScroll = () => {
      scrollRef.current.scrollTo({
        animated: true,
        y: 0,
        x: (SIZES.width / 1.1) * selectedIndex * 1.015,
      })
    }

    autoScroll()
  }, [selectedIndex])

  return (
    <Container>
      <Scroll
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onSelectedIndex}
        ref={scrollRef}
      >
        {banners.map((item) => (
          <Button
            key={item._id}
            activeOpacity={0.8}
            onPress={() =>
              item.store
                ? goToStore(item.store)
                : item.site
                ? goToSite(item.site)
                : null
            }
          >
            <Image
              key={item._id}
              source={{ uri: `${BASE_URL}/banners/${item.name}` }}
            />
          </Button>
        ))}
      </Scroll>
      <Row>
        {banners.map((item, index) => (
          <Indicator
            key={item._id}
            style={{ opacity: index === selectedIndex ? 0.5 : 1 }}
          />
        ))}
      </Row>
    </Container>
  )
}

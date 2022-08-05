import React, { memo, useEffect, useRef, useState } from 'react'
import { Linking, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { SIZES } from '../constants/theme'
import { isTokenExpired } from '../helpers/isTokenExpired'

import { useAppDispatch, useAppSelector } from '../hooks/store'
import { AuthActions, selectSocialCredentials } from '../store/ducks/authSlice'
import { HistoryActions, selectHistory } from '../store/ducks/historySlice'
import { BannerActions, selectBanner } from '../store/ducks/bannerSlice'
import { CategoryActions, selectCategory } from '../store/ducks/categorySlice'
import { FavoriteActions, selectFavorite } from '../store/ducks/favoriteSlice'

import { Loading } from '../components/Loading'
import { UserHeader } from '../components/Headers'
import { Carousel } from '../components/Carousel'
import { Categories } from '../components/Categories'
import { HorizontalScroll } from '../components/HorizontalScroll'
import { EmptyData } from '../components/EmptyData'

const Home = () => {
  let params: any = useRoute().params
  const scrollRef = useRef<any>([]),
    categoriesScrollRef = useRef<any>(),
    [active, setActive] = useState(0),
    dispatch = useAppDispatch(),
    navigation = useNavigation(),
    socialCredentials = useAppSelector(selectSocialCredentials),
    banner = useAppSelector(selectBanner),
    category = useAppSelector(selectCategory),
    allHistory = useAppSelector(selectHistory),
    favorite = useAppSelector(selectFavorite),
    favoriteIds = favorite.listIds,
    banners = banner.list,
    categories = category.list,
    mainCategories = category.mainList,
    history = allHistory.list,
    subcategories = categories[active - 1]?.subcategories,
    bannerLoading = banner.loading,
    categoryLoading = category.loading,
    mainLoading = category.mainLoading,
    historyLoading = allHistory.loading

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (params) {
        dispatch(AuthActions.successLogin(params))
        params = null
      }
    })

    return unsubscribe
  }, [navigation, params])

  useEffect(() => {
    dispatch(BannerActions.getBanners())
    dispatch(CategoryActions.getCategories())
    dispatch(CategoryActions.getMainCategories())
  }, [])

  useEffect(() => {
    const getHistory = () => {
      if (socialCredentials.userId) {
        dispatch(
          HistoryActions.getHistory({
            userId: socialCredentials.userId,
            all: false,
          })
        )
      }
    }

    const unsubscribe = navigation.addListener('focus', () => {
      getHistory()
    })
    getHistory()

    return unsubscribe
  }, [navigation, socialCredentials.userId])

  useEffect(() => {
    const isExpired =
      socialCredentials.token && isTokenExpired(socialCredentials.token)

    const getFavorites = () => {
      if (socialCredentials.userId && !isExpired) {
        !active
          ? dispatch(
              FavoriteActions.getFavorites({
                userId: socialCredentials.userId,
                type: 'category',
              })
            )
          : dispatch(
              FavoriteActions.getFavorites({
                userId: socialCredentials.userId,
                type: 'subcategory',
              })
            )
      }
    }

    const unsubscribe = navigation.addListener('focus', () => {
      getFavorites()
    })
    getFavorites()

    return unsubscribe
  }, [navigation, socialCredentials.userId, active])

  useEffect(() => {
    scrollRef.current
      ?.filter((item: any) => item)
      .map((item: any) =>
        item.scrollTo({
          animated: true,
          y: 0,
          x: 0,
        })
      )

    categoriesScrollRef.current?.scrollTo({
      animated: true,
      y: 0,
      x: (SIZES.width / 4.5) * active,
    })
  }, [active])

  return (
    <>
      <UserHeader />
      {bannerLoading || categoryLoading || mainLoading || historyLoading ? (
        <Loading />
      ) : categories.length ? (
        <ScrollView
          ref={(ref) => scrollRef.current?.push(ref)}
          showsVerticalScrollIndicator={false}
        >
          <Carousel
            banners={banners}
            goToStore={(id) =>
              navigation.navigate('Store' as never, id as never)
            }
            goToSite={(url) => Linking.openURL(url)}
          />
          <Categories
            categories={categories}
            active={active}
            setActive={setActive}
            scrollRef={categoriesScrollRef}
          />
          {!active ? (
            <>
              {history?.length ? (
                <HorizontalScroll
                  isHistory
                  categorizationInfos={{
                    _id: '0',
                    name: 'Visto por último',
                    description: 'Aqui estão as últimas páginas acessadas!',
                  }}
                  stores={history}
                  scrollRef={scrollRef}
                />
              ) : null}
              {mainCategories.length
                ? mainCategories.map((item, index) => (
                    <HorizontalScroll
                      key={item._id}
                      favorited={favoriteIds.includes(item._id)}
                      categorizationInfos={item}
                      stores={item.stores}
                      addFavorite={() =>
                        dispatch(
                          FavoriteActions.requestAddFavorite({
                            userId: socialCredentials.userId,
                            favoriteId: item._id,
                            type: 'category',
                          })
                        )
                      }
                      removeFavorite={(id) =>
                        dispatch(
                          FavoriteActions.requestRemoveFavorite({
                            userId: socialCredentials.userId,
                            favoriteId: id,
                            type: 'category',
                          })
                        )
                      }
                      goToCategory={() => setActive(index + 1)}
                      scrollRef={scrollRef}
                    />
                  ))
                : null}
            </>
          ) : subcategories?.length ? (
            subcategories.map((item) => (
              <HorizontalScroll
                key={item._id}
                favorited={favoriteIds.includes(item._id)}
                subcategoryId={item._id}
                categorizationInfos={item}
                stores={item.stores}
                addFavorite={() =>
                  dispatch(
                    FavoriteActions.requestAddFavorite({
                      userId: socialCredentials.userId,
                      favoriteId: item._id,
                      type: 'subcategory',
                    })
                  )
                }
                removeFavorite={(id) =>
                  dispatch(
                    FavoriteActions.requestRemoveFavorite({
                      userId: socialCredentials.userId,
                      favoriteId: id,
                      type: 'subcategory',
                    })
                  )
                }
                scrollRef={scrollRef}
              />
            ))
          ) : null}
        </ScrollView>
      ) : (
        <EmptyData />
      )}
    </>
  )
}

export default memo(Home)

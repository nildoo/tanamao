import { CategoryType } from './Category'
import { StoreType } from './Store'
import { SubcategoryType } from './Subcategory'

export type FavoriteType = {
  favorite: CategoryType | SubcategoryType | StoreType
  notificationEnabled: boolean
}

export type FavoriteTypesType = {
  goToFavorites: (type: string) => void
}

export type FavoritesComponenetType = {
  favorites: FavoriteType[]
  type: 'category' | 'subcategory' | 'store'
  goToStore: (id: string) => void
  updateNotificationStatus: ({
    favoriteId,
    status,
  }: {
    favoriteId: string
    status: boolean
  }) => void
  removeFavorite: (id: string) => void
}

export type AddOrRemoveFavoriteType = {
  userId: string
  favoriteId: string
  type: 'category' | 'subcategory' | 'store'
}

export type GetFavoritesType = {
  userId: string
  type: 'category' | 'subcategory' | 'store'
}

export type UpdateNotitificationStatusType = {
  userId: string
  type: 'category' | 'subcategory' | 'store'
  favoriteId: string
  status: boolean
}

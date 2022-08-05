import { CategoryType } from './Category'
import { StoreType } from './Store'
import { SubcategoryType } from './Subcategory'

export type ButtonType = {
  background?: string
  large?: Boolean
  icon?: string
  text: string
  onPress: Function
}

export type CardType = {
  store: StoreType
  onPress: Function
}

export type ToastType = {
  message: string
  type: string
}

export type HorizontalScrollType = {
  categorizationInfos:
    | { _id: string; name: string; description: string }
    | CategoryType
    | SubcategoryType
  stores: StoreType[]
  addFavorite?: Function
  removeFavorite?: (id: string) => void
  scrollRef: any
  isHistory?: boolean
  favorited?: boolean
  goToCategory?: Function
  subcategoryId?: string
}

export type SearchInputType = {
  setKeyword: Function
}

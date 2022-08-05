import { RegionType } from './Region'
import { BaseSubcatoryType } from './Subcategory'

export type StoreType = {
  _id: string
  name: string
  description?: string
  address: string
  premium: Boolean
  subcategories: BaseSubcatoryType[]
  gallery: string[]
  cellphone?: string
  site?: string
  phone?: string
  instagram?: string
  facebook?: {
    id: number
    type: 'profile' | 'page'
  }
  placeIdMaps?: string
  whatsapp?: string
  profileImage?: string
  distance?: string
  userRegion?: RegionType
  region?: RegionType
}

export type StoreComponentType = {
  store: StoreType
  logged: boolean
  addFavorite: Function
  removeFavorite: (id: string) => void
  goToLogin: Function
  favorited: boolean
}

export type StoresComponentType = {
  stores: StoreType[]
  goToStore: (id: string) => void
}

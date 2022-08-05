import { StoreType } from './Store'

export type BaseSubcatoryType = {
  name: string
  description: string
  profileImage?: string
}

export type SubcategoryType = {
  _id: string
  stores: StoreType[]
} & BaseSubcatoryType

import { StoreType } from './Store'
import { SubcategoryType } from './Subcategory'

export type CategoryType = {
  _id: string
  name: string
  description: string
  icon: string
  subcategories: SubcategoryType[]
}

export type MainCategoryType = {
  _id: string
  name: string
  description: string
  icon: string
  stores: StoreType[]
}

export type CategoriesType = {
  categories: CategoryType[]
  active: number
  setActive: Function
  scrollRef: any
}

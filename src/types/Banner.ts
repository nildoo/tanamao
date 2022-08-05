export type BannerType = {
  _id: string
  name: string
  store?: string
  site?: string
}

export type BannerComponentType = {
  banners: BannerType[]
  goToStore: (id: string) => void
  goToSite: (url: string) => void
}

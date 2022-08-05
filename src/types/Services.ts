import { RegionType } from './Region'

export type GetLatAndLongFromAddressType = {
  placeId: string
}

export type GetLatAndLongResponseType = {
  data: {
    result: {
      geometry: {
        location: RegionType
      }
    }
  }
}

export type GetDistanceBetweenType = {
  origin: RegionType
  destination: RegionType
}

export type GetDistanceBetweenResponseType = {
  data: {
    routes: [
      {
        legs: [
          {
            distance: { text: string }
          }
        ]
      }
    ]
  }
}

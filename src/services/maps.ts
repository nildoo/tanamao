import axios from 'axios'

import {
  GetLatAndLongFromAddressType,
  GetLatAndLongResponseType,
  GetDistanceBetweenType,
  GetDistanceBetweenResponseType,
} from '../types/Services'

import { toast } from '../helpers/toast'

const api = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
})

export const getLatAndLongFromAddress = async ({
  placeId,
}: GetLatAndLongFromAddressType): Promise<any> => {
  try {
    const { data }: GetLatAndLongResponseType = await api.get(
      `/place/details/json?place_id=${placeId}&key=AIzaSyBoTUhm7j_ujbHjfK6lptKG2h_KP0gsVe0`
    )

    return data.result.geometry.location
  } catch (error) {
    return toast.danger({
      message: 'Falha ao buscar localização!',
      type: 'danger',
    })
  }
}

export const getDistanceBetweenUserAndStore = async ({
  origin,
  destination,
}: GetDistanceBetweenType): Promise<any> => {
  try {
    const { data }: GetDistanceBetweenResponseType = await api.get(
      `/directions/json?origin=${origin.lat}%2C${origin.lng}&destination=${destination.lat}%2C${destination.lng}&key=AIzaSyBoTUhm7j_ujbHjfK6lptKG2h_KP0gsVe0`
    )

    return data.routes[0].legs[0].distance.text
  } catch (error) {
    return toast.danger({
      message: 'Falha ao buscar distância!',
      type: 'danger',
    })
  }
}

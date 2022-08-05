import axios from 'axios'

import { BASE_URL } from '../constants'

const api = axios.create({
  baseURL: BASE_URL,
})

export const setTokenAPI = ({ token }: { token: string }) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const removeTokenAPI = () => {
  delete api.defaults.headers.common['Authorization']
}

export default api

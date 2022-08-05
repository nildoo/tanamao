import api from '../services/api'
import { useStoragedData } from './storage'
import { toast } from '../helpers/toast'

import { store } from '../store'
import { AuthActions } from '../store/ducks/authSlice'

export const useInterceptor = () => {
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      return new Promise(async (resolve, reject) => {
        const { response, config } = error

        if (response.status === 401 && config) {
          const socialCredentials = await useStoragedData({
            key: 'socialCredentials',
          })

          store.dispatch(AuthActions.refreshToken(socialCredentials))

          return resolve(response)
        } else {
          store.dispatch(AuthActions.logout())

          toast.danger({
            message: 'Algo deu errado, você foi desconectado por segurança!',
            type: 'danger',
          })

          return reject(error)
        }
      })
    }
  )
}

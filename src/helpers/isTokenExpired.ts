import jwtDecode from 'jwt-decode'
import moment from 'moment'

export const isTokenExpired = (token: string): boolean => {
  const decodedToken: any = jwtDecode(token)
  const isExpired = moment.unix(decodedToken.exp).diff(moment()) < 1

  return isExpired
}

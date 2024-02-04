import Cookies from 'universal-cookie'
import { googleLogout } from '@react-oauth/google'

export const logout = (): void => {
  googleLogout()
  const cookies = new Cookies()
  cookies.remove('auth_cookie')
  cookies.remove('access_token')
  cookies.remove('refresh_token')
}

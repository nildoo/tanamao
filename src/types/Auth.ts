export type SocialCredentialsType = {
  userId: string
  username: string
  profilePicture: string
  token: string
  refreshToken: string
  fcmToken?: string
}

export type LoginComponentType = {
  socialLogin: (provider: 'google' | 'facebook') => void
}

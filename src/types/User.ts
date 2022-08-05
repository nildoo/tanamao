export type SaveFcmTokenType = {
  userId: string
  token: string
}

export type NotificationType = {
  _id: string
  title: string
  message: string
  type: 'category' | 'subcategory' | ' store'
  createdAt: Date
}

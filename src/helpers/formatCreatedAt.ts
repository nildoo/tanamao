import moment from 'moment'
import 'moment/locale/pt-br'

export const formatCreatedAt = ({ createdAt }: { createdAt: Date }): string => {
  const now = moment()
  const date = moment(createdAt)
  const todayDay = now.format('D')
  const yesterdayDay = now.add(-1, 'day').format('D')
  const createdAtDay = date.format('D')
  const day =
    createdAtDay === todayDay
      ? 'Hoje'
      : createdAtDay === yesterdayDay
      ? 'Ontem'
      : date.format('ddd')
  const hour = date.format('HH:mm')

  return `${day} - ${hour}`
}

import dayjs from 'dayjs'
import type { ConfigType } from 'dayjs'

export function formatMonthDay(date: ConfigType, formatConfig: string = 'MM月DD日') {
  return dayjs(date).format(formatConfig)
}

export function getDiffDay(SDate: ConfigType, EDate: ConfigType) {
  return dayjs(EDate).diff(SDate, 'day')
}

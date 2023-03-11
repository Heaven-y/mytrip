import dayjs from 'dayjs'
import type { ConfigType } from 'dayjs'

const arr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
export function formatMonthDay(
  date: ConfigType,
  formatConfig: string = 'MM月DD日',
  isWeek: boolean = false
) {
  if (isWeek) {
    return arr[dayjs(date).day()]
  }
  return dayjs(date).format(formatConfig)
}

export function getDiffDay(SDate: ConfigType, EDate: ConfigType) {
  return dayjs(EDate).diff(SDate, 'day')
}

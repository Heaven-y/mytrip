import type { ConfigType } from 'dayjs'

export interface IMainStore {
  nowDate: ConfigType
  newDate: ConfigType

  currentCity: {
    cityName: string
  }

  isLoading: boolean
}

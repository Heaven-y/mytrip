import myRequest from '..'
import type { DetailInfos } from '@/stores/types/detail'

export function getDetailInfo(houseId: string) {
  return myRequest.get<DetailInfos>({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}

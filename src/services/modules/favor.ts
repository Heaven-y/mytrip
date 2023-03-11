import type { FavorList } from '@/stores/types/favor'
import myRequest from '..'

export function getFavorList() {
  return myRequest.get<FavorList>({
    url: '/favor/list'
  })
}
export function getHistoryList() {
  return myRequest.get<FavorList>({
    url: '/favor/history'
  })
}

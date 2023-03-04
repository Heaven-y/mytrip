import myRequest from '..'
import type { Hot, Categories, HouseList } from '@/stores/types/home'

export function getHomeSuggest() {
  return myRequest.get<Hot[]>({
    url: '/home/hotSuggests'
  })
}

export function getHomeCategories() {
  return myRequest.get<Categories[]>({
    url: '/home/categories'
  })
}

export function getHomeHouseList(currentPage: number) {
  return myRequest.get<HouseList[]>({
    url: '/home/houselist',
    params: {
      page: currentPage
    }
  })
}

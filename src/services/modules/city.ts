import type { AllCities } from '@/stores/types/city'
import myRequest from '..'

export function getCityAll() {
  return myRequest.get<AllCities>({
    url: '/city/all'
  })
}

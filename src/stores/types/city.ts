export interface ICityStore {
  allCities: AllCities
}

export interface AllCities {
  cityGroup: CityGroup
  cityGroupOverSea: CityGroupOverSea
}
export interface CityGroup {
  title: string
  hotCities: any[]
  cities: any[]
}
export interface CityGroupOverSea {
  title: string
  hotCities: any[]
  cities: any[]
}

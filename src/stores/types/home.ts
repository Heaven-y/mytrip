export interface IHomeStore {
  hotSuggests: Hot[]
  categories: Categories[]
  houseList: HouseList[]
  currentPage: number
}
// 热门搜索推荐
export interface Hot {
  tagText: TagText
  tagDesc: any
  tagCode: number
  tagLink: string
  aloneLine: boolean
  childTags: any
  checkBubble: boolean
}
export interface TagText {
  text: string
  color: string
  border: any
  tips: any
  background: Background
}
export interface Background {
  color: string
  image: any
  gradientColor: any
}
// 分类
export interface Categories {
  pictures?: any
  redPacketConfig?: any
  content?: any
  id: string
  testBucket: string
  title: string
  subTitle: string
  pictureUrl: string
  videoUrl: string
  subPictureUrl: string
  labels: any[]
  navigateUrl: string
  adCampaign: boolean
}
// 房屋列表
export interface HouseList {
  discoveryContentType: number
  data: Data
}
export interface Data {
  iconTag?: any
  productPrice: number
  priceTipBadge?: PriceTipBadge
  houseAdvert?: any
  activityInfo?: any
  sellingPoint?: any
  guideText?: any
  referencePriceDesc?: any
  poiLocation?: any
  houseId: number
  houseName: string
  houseTags?: any
  image: Image
  commentScore: string
  extendMap: { logicBit: string }
  summaryText: string
  showHouseVideo: boolean
  cityId: number
  finalPrice: number
  location: string
}
export interface PriceTipBadge {
  type: number
  text: string
  color: string
  background?: any
  border?: any
  orderIndex: number
  tip?: any
  jumpUrl?: any
  colorType: number
  gradient: Gradient
}
export interface Gradient {
  startColor: string
  endColor: string
}
export interface Image {
  url: string
  width: number
  height: number
}

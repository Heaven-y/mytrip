export interface IFavorStore {
  favorList: FavorList
  historyList: FavorList
}
export interface FavorList {
  _id: string
  trace?: any
  referTraceId: string
  ver: string
  ret: boolean
  errmsg?: any
  errTip?: any
  errcode: number
  data: FavorListItem
}
export interface FavorListItem {
  items: FavorItem[]
}
export interface FavorItem {
  houseTypeName?: any
  pictureList: string[]
  longitude: number
  latitude: number
  allowBooking: boolean
  unitInfor: string
  active: boolean
  finalPrice: number
  addPeopleAmount: number
  cleaningAmount: number
  chineseLandlord: boolean
  quickBooking: number
  cleaningTipsText?: any
  priceTags?: any
  topListTag?: any
  urgencyTip?: any
  finalPriceDisplayType: number
  priceTipBadge: PriceTipBadge
  displayOrigionPrice: boolean
  houseListTagImage?: any
  productId: number
  landlordLevelUrl: string
  productPriceConstract?: any
  promoText?: any
  extends4Ctrip: any
  boardRank: number
  cmsListRank: number
  extendMap: any
  houseAdvert?: any
  inTns: boolean
  unitId: number
  unitName: string
  address: string
  geoCoordSysType: string
  cityId: number
  cityName: string
  districtName: string
  productPrice: number
  failType: number
  priceMissingText?: any
  failDesc?: any
  diamondLevel: number
  brandHotel: boolean
  great: boolean
  logoUrl: string
  landlordHeadStyle: any
  hotleId: number
  pictureCount: number
  smallPictureUrl: string
  defaultPicture: string
  showHouseVR: boolean
  adverUnit: boolean
  advertUnitType: number
  expressBooking: boolean
  rba: boolean
  rankScore: number
  rankScore2: number
  qualityCertification: string
  unitSummeries: any[]
  sourceChannel: number
  activityId: string
  atmosphereCornerIcon: string
  promotionPicUrl?: any
  unitTags: any[]
  distance?: any
  checkOutDate: string
  checkInDate: string
  allActiveAndRedPacket: any
  activityInfo: string
  favoriteCount: string
  commentBriefForCD: any
  commentBrief: any
  isCommentNewStyle: boolean
  isPremiumFeatureHouse: boolean
  houseTags: any[]
  houseTagsForCD: any[]
  promoContent?: any
  picTopIcon?: any
}
interface PriceTipBadge {
  type: number
  id: number
  text: string
  color: string
  background?: any
  border?: any
  orderIndex: number
  tip?: any
  jumpUrl?: any
  colorType: number
  gradient: any
}
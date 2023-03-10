export interface IDetailStore {
  detailInfo: DetailInfos
}
export interface DetailInfos {
  houseId: number
  canSale: boolean
  unitInstanceCount: number
  mainPart: MainPart
  pricePart: any
  popupUpJson: string
  currentHouse: any
  floatingBall?: any
  debugInfo: string
}
export interface MainPart {
  topModule: TopModule
  shareModule: any
  introductionModule: { title: string; introduction: string }
  ensureModule: any
  businessLicenseModule: any[]
  dynamicModule: DynamicModule
  businessLicenseModuleTitle: string
}

export interface TopModule {
  favoriteCount: number
  housePicture: HousePicture
  promotionPic?: any
  houseName: string
  houseTags: any[]
  commentBrief: any
  nearByPosition: any
  urgencyPromotion?: any
  redPacketTagData?: any
  atmosphereVo?: any
  checkInDate: string
  checkOutDate: string
  boardRanks?: any
  loginGuidance?: any
  diamondLevel: any
  headTag: any
  businessDistrictConfig?: any
  briefComments: any[]
}
export interface HousePicture {
  housePics: HousePic[]
  preferredProPics: any[]
  housePictureGroup: any[]
  houseVRURL?: any
  houseVideoURL?: any
  houseVideoTimeSpan: number
  defaultPictureURL: string
  picCount: number
  houseVideos?: any
}
export interface HousePic {
  title: string
  url: string
  albumUrl: string
  orderIndex: number
  pictureExplain?: any
  enumPictureCategory: number
}

export interface DynamicModule {
  moduleSort: any[]
  facilityModule: FacilityModule
  landlordModule: LandlordModule
  commentModule: CommentModule
  positionModule: PositionModule
  rulesModule: { orderRules: OrderRules[] }
  featureModule?: any
  landlordRecommendModule: any
  bannerModule?: any
}
export interface FacilityModule {
  topScroll: any
  houseContent: string
  houseSummary: any[]
  houseFacility: HouseFacility
}
export interface HouseFacility {
  specialFacilitys: any[]
  houseFacilitys: HouseFacilitys[]
  facilitySort: number[]
  bedSizeDetailInfo: any
}
export interface HouseFacilitys {
  facilitys: any[]
  groupId: number
  groupName: string
  icon: string
}
export interface LandlordModule {
  hotelId: number
  topScroll: string
  hotelLogo: string
  hotelName: string
  landlordLevelUrl?: any
  hotelTags: any[]
  landlordTag?: any
  hotelSummary: any[]
  businessType: number
  landlordLevel: number
  isReplyTimeMoreThan5Min: boolean
}
export interface CommentModule {
  overall: number
  scoreTitle: string
  totalCount: number
  subScores: string[]
  subScoresFocus: any[]
  commentTagVo: CommentTagVo[]
  comment: Comment
  commentTabType: number
  commentAvatarsLimit: any[]
  totalCountStr: string
  evaluationModule?: any
}
export interface Comment {
  userAvatars: string
  userName: string
  checkInDate: string
  memberLevelIcon: string
  overall: number
  commentDetail: string
  scoreTags?: any
  pictureList?: any
  goodCommentUrl?: any
  commentTopicList?: any
  commentTrySleepIconUrl?: any
  commentTrySleepText?: any
  houseName: string
  location: string
}
export interface CommentTagVo {
  color: string
  backgroundColor: string
  text: string
  selected: boolean
  selectParam: string
  focusColor: string
  borderColor: string
  texts: string[]
}
export interface OrderRules {
  title: string
  introduction: string
  link?: any
  icon?: any
  tips?: any
  deleted: boolean
  loginFlag: boolean
  color?: any
}
export interface PositionModule {
  cityId: number
  cityName: string
  cityTerritoryType: number
  longitude: number
  latitude: number
  geoCoordSysType: string
  address: string
  ctripCityId: number
  tips: string
  topScroll: any
  mapUrl: string
  unitGeoPositions?: any
  communityInfo?: any
  areaName: string
  tradeArea: string
  poi: string
}

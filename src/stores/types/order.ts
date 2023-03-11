export interface IOderStore {
  orderList: OrderList
}
export interface OrderList {
  tnsSkin: boolean
  totalCount: number
  orders: Order[]
  waitCommentOrder?: any
}
export interface Order {
  id?: any
  orderId: number
  orderNumber: string
  tnsOrder: boolean
  checkInDate: string
  checkOutDate: string
  checkInLatestTime: string
  checkOutLatestTime: string
  summary: string
  highLightSummary: string
  countdown: number
  invoiceAmount?: any
  unitId: number
  unitName: string
  unitPicture: string
  orderStatus: number
  orderStatusDesc: string
  cancelReasonCode: number
  cancelReasonDesc: string
  ggOriginalOrderId: string
  orderStatusDescColor: string
  deposit: boolean
  invoiceLink?: any
  operationFlag: number
  longitude: number
  latitude: number
  geoCoordSysType: string
  address: string
  cityName: string
  cityTerritoryType: number
  hotelLogo: string
  hotelName: string
  commentStatus: number
  totalAmount: number
  prepayAmount: number
  confirmValidity: number
  detailOperationFlagEnable: boolean
  sourceType: number
  houseNavigation?: any
  lock?: any
  commentButtonText: string
  needUrgencySense: boolean
  contactPhone: string
  midNightFlag: boolean
  ext: any
  hotelId: number
  bargainActivityUrl?: any
  redPacketAmountForComment: number
  thirdOrderId?: any
  orderDetailUrl?: any
  depositAmount: number
}

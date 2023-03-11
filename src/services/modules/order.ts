import myRequest from '..'

export function getOderListByType(type: string) {
  return myRequest.get({
    url: '/order/list',
    params: {
      type
    }
  })
}

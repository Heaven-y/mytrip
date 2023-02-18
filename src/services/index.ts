import MYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const myRequest = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    responseInterceptor(res) {
      return res.data
    }
  }
})

export default myRequest

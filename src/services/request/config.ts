let BASE_URL = ''
if (import.meta.env.DEV) {
  // 开发环境
  BASE_URL = 'http://123.207.32.32:1888/api'
} else {
  // 生产环境
  BASE_URL = 'http://codercba.com:1888/api'
}

const TIME_OUT = 5000

export { BASE_URL, TIME_OUT }

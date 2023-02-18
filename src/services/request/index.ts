import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { MYRequestConfig } from './type'

class MYRequest {
  instance: AxiosInstance
  constructor(config: MYRequestConfig) {
    this.instance = axios.create(config)

    // 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        // 取到data后
        // .request<any, AxiosResponse>(config)
        // 变成.request<any, T>(config)
        return data
      },
      (err) => {
        return err
      }
    )

    // 实例拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    )
  }

  request<T = any>(config: MYRequestConfig<T>) {
    // 单次请求拦截器
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单次响应拦截器
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default MYRequest

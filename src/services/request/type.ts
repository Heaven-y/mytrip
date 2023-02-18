import type { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface MYRequestInterceptors<T> {
  requestInterceptor?: (config: AxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}
export interface MYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MYRequestInterceptors<T>
}

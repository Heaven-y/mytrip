import { useRouter } from 'vue-router'

export default function useGoBack(isHome: boolean = false, cb?: (...args: any) => any) {
  const router = useRouter()
  return (...args: any) => {
    isHome ? router.push('/home') : router.back()
    cb ? cb(...args) : null
  }
}

import { ref, onMounted, onUnmounted } from 'vue'
import { throttle } from 'lodash'

export default function useScroll(elRef?: any) {
  let el: any = window
  onMounted(() => {
    if (elRef) el = elRef.value
    el.addEventListener('scroll', handleScroll)
  })
  onUnmounted(() => {
    el.removeEventListener('scroll', handleScroll)
  })
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)
  const scrollTop = ref(0)
  const handleScroll = throttle(
    () => {
      if (el === window) {
        clientHeight.value = document.documentElement.clientHeight
        scrollTop.value = document.documentElement.scrollTop
        scrollHeight.value = document.documentElement.scrollHeight
      } else {
        clientHeight.value = el.clientHeight
        scrollHeight.value = el.scrollHeight
        scrollTop.value = el.scrollTop
      }
      if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
        isReachBottom.value = true
      }
    },
    300,
    { trailing: true }
  )
  return { isReachBottom, clientHeight, scrollHeight, scrollTop }
}

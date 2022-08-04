import type { Ref } from 'vue'

const set =
  (x: Ref<number>, y: Ref<number>) => (x2: number, y2: number) => {
    x.value = x2
    y.value = y2
  }

export const useResolution = () => {
  const x = ref(0)
  const y = ref(0)

  return {
    x: readonly(x),
    y: readonly(y),
    set: set(x, y),
  }
}

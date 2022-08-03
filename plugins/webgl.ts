import WebGLContent from '@/webgl'

export default defineNuxtPlugin(() => {
  const webgl = new WebGLContent()

  return {
    provide: {
      webgl,
    },
  }
})

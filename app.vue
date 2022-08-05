<template>
  <div>
    <h1 class="text-xl">Migrate from Nuxt2 to Nuxt3 on sketch-threejs-v2</h1>
    <nuxt-layout />
    <canvas id="canvas-webgl" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    let timer: number = 0

    const debounceSetSize = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        this.setSize()
      }, 200)
    }

    window.addEventListener('resize', debounceSetSize)
    window.addEventListener('orientationchange', debounceSetSize)
    this.setSize()
  },
  methods: {
    setSize() {
      const resolution = useResolution()

      resolution.set(window.innerWidth, window.innerHeight)
    },
  },
})
</script>

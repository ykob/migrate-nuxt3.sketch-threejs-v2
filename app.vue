<template>
  <div>
    <nuxt-layout></nuxt-layout>
    <canvas id="canvas-webgl"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { sleep } from '@ykob/js-util'

export default defineComponent({
  async mounted() {
    const { commit } = this.$store
    let timer: number = 0

    const debounceSetSize = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        this.setSize()
      }, 200)
    }

    await this.$webgl.start()
    this.setSize()

    window.addEventListener('resize', debounceSetSize)
    window.addEventListener('orientationchange', debounceSetSize)

    await sleep(2000)
    commit('ready')
  },
  methods: {
    setSize() {
      const { state, commit } = this.$store

      commit('setSize', {
        x: window.innerWidth,
        y: window.innerHeight,
      })
      this.$webgl.resize(state.resolution.x, state.resolution.y)
    },
  },
})
</script>

<style>
canvas {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>

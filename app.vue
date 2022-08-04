<template>
  <div>
    <nuxt-layout />
    <canvas id="canvas-webgl" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
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

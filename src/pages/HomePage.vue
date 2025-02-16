<template>
  <ApodSection />
  <ApodGallerySection />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ApodSection, ApodGallerySection } from '@/features/space-gallary'
export default defineComponent({
  setup() {
    return {}
  },
  components: { ApodSection, ApodGallerySection },
})
</script>

<style scoped></style>

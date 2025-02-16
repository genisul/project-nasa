<template>
  <article class="flex w-full flex-col gap-4">
    <ApodPreviewImage v-if="data.media_type === 'image'" :url="data.url" />
    <ApodPreviewVideo v-else :url="data.url" />
    <ApodPreviewContent
      :title="data.title"
      :date="data.date"
      :explanation="data.explanation"
    />
  </article>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Apod } from '../types'
import ApodPreviewContent from './ApodPreviewContent.vue'
import ApodPreviewImage from './ApodPreviewImage.vue'
import ApodPreviewVideo from './ApodPreviewVideo.vue'

export default defineComponent({
  props: {
    apod: {
      type: Object as PropType<Apod>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    return { data: props.apod }
  },
  components: {
    ApodPreviewContent,
    ApodPreviewImage,
    ApodPreviewVideo,
  },
})
</script>

<style scoped></style>

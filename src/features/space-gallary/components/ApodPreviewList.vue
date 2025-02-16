<template v-if="data && data?.length > 0">
  <div class="hidden h-full w-full flex-col gap-20 sm:flex">
    <ApodPreviewHorizontalCard
      v-for="(apod, index) in data"
      :apod="apod"
      :key="apod.title"
      :index="index"
    />
  </div>
  <div class="flex h-full w-full flex-col gap-20 sm:hidden">
    <ApodPreviewVerticalCard
      v-for="(apod, index) in data"
      :apod="apod"
      :key="apod.title"
      :index="index"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import ApodPreviewHorizontalCard from './ApodPreviewHorizontalCard.vue'
import ApodPreviewVerticalCard from './ApodPreviewVerticalCard.vue'

import type { Apod } from '../types'

export default defineComponent({
  components: { ApodPreviewHorizontalCard, ApodPreviewVerticalCard },
  props: {
    data: {
      type: Array as PropType<Apod[]>,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>

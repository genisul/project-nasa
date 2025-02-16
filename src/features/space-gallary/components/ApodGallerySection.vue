<template>
  <section class="flex w-full flex-col items-center gap-10 py-20">
    <h2 class="w-full text-4xl font-bold sm:mb-20">Astronomy Gallery</h2>
    <ApodPreviewList :data="data" />
  </section>
</template>

<script lang="ts">
import { spaceGallaryService } from '@/features/space-gallary'
import { useQuery } from '@tanstack/vue-query'
import { computed, defineComponent } from 'vue'
import type { Apod } from '../types'
import ApodPreviewList from './ApodPreviewList.vue'

export default defineComponent({
  components: { ApodPreviewList },
  setup() {
    const startDate = new Date(new Date().setDate(new Date().getDate() - 6))
    const endDate = new Date(new Date().setDate(new Date().getDate() - 1))

    const { isPending, isError, data } = useQuery({
      queryKey: ['apod-gallery'],
      queryFn: () =>
        spaceGallaryService.getApodRange(
          startDate.toISOString().split('T')[0],
          endDate.toISOString().split('T')[0],
        ),
    })
    const filteredData = computed(() => {
      if (!data.value) return data.value
      return data.value
        .filter((apod: Apod) => apod.url && apod.url !== '')
        .sort(
          (a: Apod, b: Apod) =>
            new Date(b.date).getTime() - new Date(a.date).getTime(),
        )
    })
    return { isPending, isError, data: filteredData }
  },
})
</script>

<style scoped></style>

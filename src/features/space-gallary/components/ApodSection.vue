<template>
  <section class="mt-12 flex h-screen w-full flex-col items-center py-20">
    <SectionHeader
      title="Astronomy Picture of the Day"
      :description="data?.title ?? ''"
    />

    <div class="max-h-[60rem] w-auto overflow-hidden rounded-3xl bg-slate-400">
      <template v-if="!isPending && !isError">
        <img
          :src="data?.hdurl"
          v-if="data?.media_type === 'image'"
          alt="apod"
          class="h-full w-full object-cover"
        />
        <video
          v-if="data?.media_type === 'video'"
          :src="data?.url"
          controls
          class="h-full w-full object-cover"
        />
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { spaceGallaryService } from '@/features/space-gallary'
import { useQuery } from '@tanstack/vue-query'
import { defineComponent } from 'vue'
import { SectionHeader } from '@/shared/components/ui/header'

export default defineComponent({
  components: { SectionHeader },
  setup() {
    const { isPending, isError, data } = useQuery({
      queryKey: ['apod'],
      queryFn: () => spaceGallaryService.getApod(),
    })
    return { isPending, isError, data }
  },
})
</script>

<style scoped></style>
